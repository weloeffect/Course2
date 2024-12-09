"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeData = exports.readData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
file handling functionalities for reading and writing data.
 */
const readData = (fileName) => {
    const filePath = path_1.default.join(__dirname, '../data', fileName);
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};
exports.readData = readData;
const writeData = (fileName, data) => {
    const filePath = path_1.default.join(__dirname, '../data', fileName);
    fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};
exports.writeData = writeData;
