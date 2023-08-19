import express, {Express, Request, Response} from "express";
import cors from "cors";
import {ResourceConfig} from './config';

const resourceConfig: ResourceConfig = ResourceConfig;

const app : Express = express();
const port: string | number = resourceConfig.port;
const api: string  = resourceConfig.api;

app.use(cors({
  origin: api,
}));

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("./src/public", { extensions: ["css", "png", "svg", "gif", "jpg", "jpeg",] }));
app.use(express.static("./src/views", { extensions: ["html"] }));
app.use(express.static("./dist/public", { extensions: ["js"] }));

app.get('/', (req: Request, res: Response) => {
  res.redirect('/login');
});

app.all('*', (req: Request, res: Response) => {
  res.redirect('/404');
});


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
