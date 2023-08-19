import express, {Express} from "express";
import {ResourceConfig} from './config';
import {router} from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import cors from "cors";

const resourceConfig: ResourceConfig = ResourceConfig;

const server: Express = express();
const port: string | number = resourceConfig.port;
const client: string  = resourceConfig.client;

server.use(cors({
  origin: client,
}));

server.use(express.urlencoded({extended: true}))
server.use(express.json());


server.use('/', router);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.get('*', function (req, res) {
  res.redirect('/api-docs');
})

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
