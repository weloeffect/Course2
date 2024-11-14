"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateData = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errorMessage = error.details.map((detail) => detail.message).join(', ');
            res.status(400).json({
                status: 'fail',
                message: errorMessage,
            });
            return;
        }
        next();
    };
};
exports.default = validateData;
