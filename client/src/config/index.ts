import dotenv from 'dotenv';

dotenv.config();

export interface ResourceConfig {
    port: string | number;
    api: string;
}

export const ResourceConfig: ResourceConfig = {
    port: process.env.PORT || 8080,
    api: process.env.API || '',

};