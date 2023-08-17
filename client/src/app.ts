import express, {Express, Request, Response} from "express";
import path from "path";
import {ResourceConfig} from './config';

const resourceConfig: ResourceConfig = ResourceConfig;

const app : Express = express();
const port: string | number = resourceConfig.port;

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("./src/public", { extensions: ["css", "png", "svg", 'gif'] }));
app.use(express.static("./src/views", { extensions: ["html"] }));
app.use(express.static("./dist/public", { extensions: ["js"] }));

app.get('/', (req: Request, res: Response) => {
  res.redirect('/login');
});

// // app.get('/register', (req: Request, res: Response) => {
// //   res.sendFile('register.html', { root: "./src/views" })
// // });

// // app.get('/dashboard', (req: Request, res: Response) => {
// //   res.sendFile('dashboard.html', { root: "./src/views" })
// // });

// // app.get('/expensesOverview', (req: Request, res: Response) => {
// //   res.sendFile('analytics.html', { root: "./src/views" })
// // });

// app.get('/addExpense', (req: Request, res: Response) => {
//   console.log("here");
  
//   res.sendFile('index.html', { root: "./dist/views/addExpense" })
// });

app.all('*', (req: Request, res: Response) => {
  res.redirect('/addExpense');
});


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
