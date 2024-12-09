"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const MyError_1 = require("../utils/MyError");
/**
 * Handles errors.
 * @param req Express request object
 * @param res Express response object
 * @returns error is returned with the specific message and status code
 */
const errorHandler = (err, req, res, next) => {
    const statusCode = err instanceof MyError_1.MyError ? err.statusCode : 500;
    const message = err.message || 'An unexpected error occurred. Please try again';
    logger_1.default.error(`Error: ${message}, Status Code: ${statusCode}`);
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};
exports.default = errorHandler;
