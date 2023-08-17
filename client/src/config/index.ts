import dotenv from 'dotenv';

dotenv.config();

export interface ResourceConfig {
    port: string | number;
}

export const ResourceConfig: ResourceConfig = {
    port: process.env.PORT || 8080,
};