"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.courseSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    modules: joi_1.default.array().items(joi_1.default.object({
        title: joi_1.default.string().required(),
        lessons: joi_1.default.array().items(joi_1.default.object({
            title: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            topics: joi_1.default.array().items(joi_1.default.string()).required(),
            content: joi_1.default.array().items(joi_1.default.object({
                type: joi_1.default.string().valid('text', 'video', 'audio').required(),
                data: joi_1.default.string().required(),
            })).required(),
        })).required(),
    })).required(),
});
