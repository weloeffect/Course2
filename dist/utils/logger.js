"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
/**
 * logging functionality
 */
const logLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4,
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        debug: 'blue',
    },
};
winston_1.default.addColors(logLevels.colors);
const logger = winston_1.default.createLogger({
    levels: logLevels.levels,
    level: process.env.LOG_LEVEL || 'debug', // Default log level
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.default.format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)),
    transports: [
        new winston_1.default.transports.Console(), // Logs to the console
        new winston_1.default.transports.File({ filename: 'logs/error.log', level: 'error' }), // Logs errors to a file
        new winston_1.default.transports.File({ filename: 'logs/combined.log' }), // Logs all levels to a file
    ],
});
exports.default = logger;
