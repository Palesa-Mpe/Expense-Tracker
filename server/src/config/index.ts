import dotenv from 'dotenv';

dotenv.config();

interface DbConfig {
    contactPoints: string[];
    localDataCenter: string;
    keyspace: string;
    username: string;
    password: string;
}
  
export interface ResourceConfig {
    port: string | number;
    client: string;
    dbConfig: DbConfig;
}

export const ResourceConfig: ResourceConfig = {
    port: process.env.PORT || 4040,
    client: process.env.CLIENT || '',
    dbConfig: {
        contactPoints: [process.env.CONTACT_POINTS || 'localhost'],
        localDataCenter: process.env.DATA_CENTER || 'datacenter1',
        keyspace: process.env.KEYSPACE || 'expense_tracker',
        username: process.env.KEYSPACES_USERNAME || '',
        password: process.env.KEYSPACES_PASSWORD || '' 
    },
};