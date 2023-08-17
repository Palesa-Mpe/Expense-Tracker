"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const resourceConfig = config_1.ResourceConfig;
const server = (0, express_1.default)();
const port = resourceConfig.port;
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.json());
server.use('/', routes_1.router);
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
