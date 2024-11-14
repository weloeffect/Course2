"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const loggerMiddleware_1 = __importDefault(require("./middleware/loggerMiddleware"));
const rateLimiter_1 = __importDefault(require("./middleware/rateLimiter"));
const swagger_1 = __importDefault(require("./swagger"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
(0, swagger_1.default)(app);
app.get('/', (req, res) => {
    res.send('Course Management System');
});
app.use('/api/courses', courseRoutes_1.default);
app.use(loggerMiddleware_1.default);
app.use(rateLimiter_1.default);
app.use(errorHandler_1.default);
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
exports.default = app;
