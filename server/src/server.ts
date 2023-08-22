import express, {Express, Request, Response} from "express";
import {ResourceConfig} from './config';
import {router} from './routes';
import path from 'path';
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
// server.use(express.static('public'));


// API routes
server.use('/api/', router);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.get('/api/', function (req, res) {
  res.redirect('/api-docs');
});

// Serve frontend files
server.use(express.static(path.join(__dirname, '../../client/dist/public'), { extensions: ["css", "png", "svg", "gif", "jpg", "jpeg",] }));
server.use(express.static(path.join(__dirname, '../../client/dist/public/views'), { extensions: ["html"] }));
server.use(express.static(path.join(__dirname, '../../client/dist/'), { extensions: ["js"] }));

server.get('/', function (req, res) {
  res.redirect('/login');
});

// Catch-all route for frontend routing
server.all('*', (req: Request, res: Response) => {
  res.redirect('/404');
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
