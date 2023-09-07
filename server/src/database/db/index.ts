import { Client, auth , types } from 'cassandra-driver';
import fs from 'fs';
import path from 'path';
import { ResourceConfig } from '../../config';

interface dbResponse {
  rows: any[] | undefined;
  rowLength: number | undefined;
};
class CassandraDatabase {
  private static instance: CassandraDatabase;
  private client: Client;

  private constructor() {
    const authProvider = new auth.PlainTextAuthProvider(ResourceConfig.dbConfig.username, ResourceConfig.dbConfig.password);
    
    const sslOptions1  = {
        ca: [fs.readFileSync(path.resolve(__dirname, '../../../sf-class2-root.crt'), 'utf-8')],
        host: ResourceConfig.dbConfig.contactPoints[0],
        rejectUnauthorized: true,
    };

    this.client = new Client({
      contactPoints: ResourceConfig.dbConfig.contactPoints,
      localDataCenter: ResourceConfig.dbConfig.localDataCenter,
      authProvider: authProvider,
      sslOptions: sslOptions1,
      protocolOptions: { port: 9142 }
    });
 }

    public static getInstance(): CassandraDatabase {
        if (!CassandraDatabase.instance) {
        CassandraDatabase.instance = new CassandraDatabase();
        }
        return CassandraDatabase.instance ;
    }

  async execute(query: string, params?: any[]): Promise<dbResponse | null> {
    try {
      const result = await this.client.execute(query, params, { prepare: true, consistency: types.consistencies.localQuorum, counter: true,  });
      // console.log(result);
      
      return {rows: result.rows, rowLength: result.rowLength}
    } catch (error : any) {
      console.log(error.message);
      return null;
    }
    
  }

  async shutdown(): Promise<void> {
    await this.client.shutdown();
    console.log('Cassandra connection closed');
  }
}

export const cassandraDatabase = CassandraDatabase.getInstance();