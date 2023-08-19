"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const cors_1 = __importDefault(require("cors"));
const resourceConfig = config_1.ResourceConfig;
const server = (0, express_1.default)();
const port = resourceConfig.port;
const client = resourceConfig.client;
server.use((0, cors_1.default)({
    origin: client,
}));
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.json());
server.use(express_1.default.static('public'));
server.use(express_1.default.static(path_1.default.join(__dirname, '../../client/src/public'), { extensions: ["css", "png", "svg", "gif", "jpg", "jpeg",] }));
server.use(express_1.default.static(path_1.default.join(__dirname, '../../client/src/views'), { extensions: ["html"] }));
server.use(express_1.default.static(path_1.default.join(__dirname, '../../client/dist/public'), { extensions: ["js"] }));
server.get('/login', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../client/src/views/login/index.html'));
});
// API routes
server.use('/api/', routes_1.router);
server.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
server.get('/api/', function (req, res) {
    res.redirect('/api-docs');
});
server.all('*', (req, res) => {
    res.redirect('/404');
});
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
