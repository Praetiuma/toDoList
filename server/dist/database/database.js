"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DEV_PORT, DB_NAME, DB_USERNAME, DB_HOST, DB_PASSWORD } = process.env;
exports.database = new sequelize_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DEV_PORT,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        encrypt: true
    },
});
