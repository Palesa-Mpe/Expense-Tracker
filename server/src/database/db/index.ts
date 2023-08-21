import { Client, types as CassandraTypes } from 'cassandra-driver';

class CassandraDatabase {
  private static instance: CassandraDatabase;
  private client: Client;

  private constructor() {
    // Initialize Cassandra client here
    this.client = new Client({
      contactPoints: ['localhost'], // Update with your Cassandra contact points
      localDataCenter: 'datacenter1', // Update with your data center name
      keyspace: 'expense_tracker', // Update with your keyspace name
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