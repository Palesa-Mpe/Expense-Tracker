"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ResourceConfig = {
    port: process.env.PORT || 4040,
    client: process.env.CLIENT || '',
    dbConfig: {
        contactPoints: [process.env.CONTACT_POINTS || 'localhost'],
        localDataCenter: process.env.DATA_CENTER || 'datacenter1',
        keyspace: process.env.KEYSPACE || 'expense_tracker',
    },
};
