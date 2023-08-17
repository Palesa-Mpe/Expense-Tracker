import dotenv from 'dotenv';

dotenv.config();

interface DbConfig {
    user: string;
    password: string;
    database: string;
    server: string;
}
  
export interface ResourceConfig {
    port: string | number;
    dbConfig: DbConfig;
}

export const ResourceConfig: ResourceConfig = {
    port: process.env.PORT || 4040,
    dbConfig: {
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
        server: process.env.DB_SERVER || '',
    },
};