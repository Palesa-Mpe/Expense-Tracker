"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const resourceConfig = config_1.ResourceConfig;
const app = (0, express_1.default)();
const port = resourceConfig.port;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static("./src/public", { extensions: ["html", "css", "png", "svg", 'gif'] }));
app.use(express_1.default.static("./dist/public", { extensions: ["js"] }));
// app.get('/', (req: Request, res: Response) => {
//   res.sendFile('login.html', { root: "./views/" })
// });
// app.get('/register', (req: Request, res: Response) => {
//   res.sendFile('register.html', { root: "./views/" })
// });
// app.get('/dashboard', (req: Request, res: Response) => {
//   res.sendFile('dashboard.html', { root: "./views/" })
// });
// app.get('/expensesOverview', (req: Request, res: Response) => {
//   res.sendFile('analytics.html', { root: "./views/" })
// });
app.get('/addExpense', (req, res) => {
    res.sendFile('expenses.html', { root: "./src/views" });
});
app.all('*', (req, res) => {
    res.redirect('/addExpense');
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
