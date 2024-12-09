"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.getCourseById = exports.getAllCourses = void 0;
const fileHandler_1 = require("../utils/fileHandler");
const MyError_1 = require("../utils/MyError");
const logger_1 = __importDefault(require("../utils/logger"));
const COURSE_FILE = 'courses.json';
const cache = {};
/**
 * Gets available courses.
 * @param req Express request object
 * @param res Express response object
 * @returns all available courses are returned
 */
const getAllCourses = (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const cacheKey = `page-${page}-limit-${limit}`;
        if (cache[cacheKey]) {
            logger_1.default.info(`Cache hit for ${cacheKey}`);
            res.status(200).json(cache[cacheKey]);
            return;
        }
        const courses = (0, fileHandler_1.readData)(COURSE_FILE);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedCourses = courses.slice(startIndex, endIndex);
        const response = {
            data: paginatedCourses,
            page,
            limit,
            total: courses.length,
        };
        cache[cacheKey] = response;
        res.status(200).json(response);
    }
    catch (error) {
        logger_1.default.error('Failed to fetch paginated courses with caching', { error });
        next(error);
    }
};
exports.getAllCourses = getAllCourses;
/**
 * Gets a specific course only.
 * @param req Express request object
 * @param res Express response object
 * @returns Only one course is returned by Id
 */
const getCourseById = (req, res, next) => {
    try {
        const courses = (0, fileHandler_1.readData)(COURSE_FILE);
        const course = courses.find((c) => c.id === parseInt(req.params.id));
        if (!course) {
            throw new MyError_1.MyError('Course not found', 404);
        }
        logger_1.default.info(`Fetched course with ID ${req.params.id}`, { courseId: req.params.id });
        res.status(200).json(course);
    }
    catch (error) {
        logger_1.default.error(`Failed to fetch course with ID ${req.params.id}`, { error });
        next(error);
    }
};
exports.getCourseById = getCourseById;
/**
 * Creates a new course.
 * @param req Express request object
 * @param res Express response object
 * @returns a response with the new course is returned
 */
const createCourse = (req, res, next) => {
    try {
        const courses = (0, fileHandler_1.readData)(COURSE_FILE);
        const newCourse = Object.assign({ id: courses.length + 1 }, req.body);
        courses.push(newCourse);
        (0, fileHandler_1.writeData)(COURSE_FILE, courses);
        logger_1.default.info('Created new course', { courseId: newCourse.id });
        res.status(201).json(newCourse);
    }
    catch (error) {
        logger_1.default.error('Failed to create course', { error });
        next(error);
    }
};
exports.createCourse = createCourse;
/**
 * Modifies an existing course.
 * @param req Express request object
 * @param res Express response object
 * @returns a confirmation response that the course was modified is returned
 */
const updateCourse = (req, res, next) => {
    try {
        const courses = (0, fileHandler_1.readData)(COURSE_FILE);
        const index = courses.findIndex((c) => c.id === parseInt(req.params.id));
        if (index === -1) {
            throw new MyError_1.MyError('Course not found', 404);
        }
        courses[index] = Object.assign(Object.assign({}, courses[index]), req.body);
        (0, fileHandler_1.writeData)(COURSE_FILE, courses);
        logger_1.default.info(`Updated course with ID ${req.params.id}`, { courseId: req.params.id });
        res.status(200).json(courses[index]);
    }
    catch (error) {
        logger_1.default.error(`Failed to update course with ID ${req.params.id}`, { error });
        next(error);
    }
};
exports.updateCourse = updateCourse;
/**
 * Deletes a specific course.
 * @param req Express request object
 * @param res Express response object
 * @returns a confirmation response that the course has been deleted is returned.
 */
const deleteCourse = (req, res, next) => {
    try {
        const courses = (0, fileHandler_1.readData)(COURSE_FILE);
        const index = courses.findIndex((c) => c.id === parseInt(req.params.id));
        if (index === -1) {
            throw new MyError_1.MyError('Course not found', 404);
        }
        const deletedCourse = courses.splice(index, 1)[0];
        (0, fileHandler_1.writeData)(COURSE_FILE, courses);
        logger_1.default.info(`Deleted course with ID ${req.params.id}`, { courseId: req.params.id });
        res.status(200).json(`course with ID ${req.params.id} is deleted`);
    }
    catch (error) {
        logger_1.default.error(`Failed to delete course with ID ${req.params.id}`, { error });
        next(error);
    }
};
exports.deleteCourse = deleteCourse;
