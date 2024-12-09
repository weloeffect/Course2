"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyError = void 0;
class MyError extends Error {
    /**
     * Error handler.
     */
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.MyError = MyError;
