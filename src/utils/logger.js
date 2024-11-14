"use strict";
// import { createLogger, format, transports } from 'winston';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const logger = createLogger({
//   level: 'info',
//   format: format.combine(
//     format.timestamp(),
//     format.json()
//   ),
//   transports: [
//     new transports.Console(),
//     new transports.File({ filename: 'logs/errors.log', level: 'error' }),
//     new transports.File({ filename: 'logs/combined.log' })
//   ],
// });
const winston_1 = __importDefault(require("winston"));
const transports = [
    new winston_1.default.transports.Console({
        silent: process.env.NODE_ENV === 'test', // Disable logs in test mode
    }),
];
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    transports,
});
exports.default = logger;
