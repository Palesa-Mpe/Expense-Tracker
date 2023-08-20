import { Client, types as CassandraTypes } from 'cassandra-driver';
import { ResourceConfig } from '../../config';

const resourceConfig: ResourceConfig = ResourceConfig;

class CassandraDatabase {
  private static instance: CassandraDatabase;
  private client: Client;

  private constructor() {
    this.client = new Client({
      contactPoints: resourceConfig.dbConfig.contactPoints,
      localDataCenter: resourceConfig.dbConfig.localDataCenter,
      keyspace: resourceConfig.dbConfig.keyspace,
    });
 }

    public static getInstance(): CassandraDatabase {
        if (!CassandraDatabase.instance) {
        CassandraDatabase.instance = new CassandraDatabase();
        }
        return CassandraDatabase.instance;
    }

  async execute(query: string, params?: any[]): Promise<any[]> {
    const result = await this.client.execute(query, params, { prepare: true });
    return result.rows;
  }

  async shutdown(): Promise<void> {
    await this.client.shutdown();
    console.log('Cassandra connection closed');
  }
}

export const cassandraDatabase = CassandraDatabase.getInstance();