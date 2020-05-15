"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const config_1 = __importDefault(require("./config"));
const pool = mysql_1.default.createPool(config_1.default.database);
pool.getConnection((err, conn) => {
    if (err)
        throw err;
    conn.release();
    console.log('DB is connected');
});
exports.default = pool;
