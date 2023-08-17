import express, {Express} from "express";
import {ResourceConfig} from './config';
import {router} from './routes';

const resourceConfig: ResourceConfig = ResourceConfig;

const server: Express = express();
const port: string | number = resourceConfig.port;

server.use(express.urlencoded({extended: true}))
server.use(express.json());

server.use('/', router);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
