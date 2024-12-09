"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseController_1 = require("../controllers/courseController");
const validateData_1 = __importDefault(require("../middleware/validateData"));
const courseValidation_1 = require("../validation/courseValidation");
const router = express_1.default.Router();
/**
 * Get all courses.
 * @route GET /api/courses/
 * @param {number} [page=1] - Page number
 * @param {number} [limit=10] - Maximum number of items per page
 * @returns {object} 200 - List of courses
 * @returns {Error} 500 - Server error
 */
router.get('/', courseController_1.getAllCourses); // Read all courses
/**
 * Get a specific course by ID.
 * @route GET /api/courses/{id}
 * @param {number} id - Course ID
 * @returns {object} 200 - Course details
 * @returns {Error} 404 - Course not found
 */
router.get('/:id', courseController_1.getCourseById); // Read one course by ID
/**
 * Create a new course.
 * @route POST /api/courses/create
 * @param {object} course - Course object
 * @param {string} course.title - Course title
 * @param {string} course.description - Course description
 * @param {Array} course.modules - Course modules
 * @returns {object} 201 - Course created
 * @returns {Error} 400 - Invalid input
 */
router.post('/create', (0, validateData_1.default)(courseValidation_1.courseSchema), courseController_1.createCourse); // Create a new course
/**
 * Update an existing course by ID.
 * @route PUT /api/courses/update/{id}
 * @param {number} id - Course ID
 * @param {object} course - Course object
 * @returns {object} 200 - Course updated
 * @returns {Error} 404 - Course not found
 */
router.put('/update/:id', (0, validateData_1.default)(courseValidation_1.courseSchema), courseController_1.updateCourse); // Update an existing course by ID
/**
 * Delete a course by ID.
 * @route DELETE /api/courses/remove/{id}
 * @param {number} id - Course ID
 * @returns {object} 204 - Course deleted
 * @returns {Error} 404 - Course not found
 */
router.delete('/remove/:id', courseController_1.deleteCourse); // Delete a course by ID
exports.default = router;
