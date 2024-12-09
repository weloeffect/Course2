import express from 'express';
import { 
  getAllCourses, 
  getCourseById, 
  createCourse, 
  updateCourse, 
  deleteCourse 
} from '../controllers/courseController';
import validateData from '../middleware/validateData';
import { courseSchema } from '../validation/courseValidation';

const router = express.Router();

/**
 * Get all courses.
 * @route GET /api/courses/
 * @param {number} [page=1] - Page number
 * @param {number} [limit=10] - Maximum number of items per page
 * @returns {object} 200 - List of courses
 * @returns {Error} 500 - Server error
 */
router.get('/', getAllCourses);          // Read all courses

/**
 * Get a specific course by ID.
 * @route GET /api/courses/{id}
 * @param {number} id - Course ID
 * @returns {object} 200 - Course details
 * @returns {Error} 404 - Course not found
 */
router.get('/:id', getCourseById);      // Read one course by ID

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
router.post('/create', validateData(courseSchema), createCourse);         // Create a new course

/**
 * Update an existing course by ID.
 * @route PUT /api/courses/update/{id}
 * @param {number} id - Course ID
 * @param {object} course - Course object
 * @returns {object} 200 - Course updated
 * @returns {Error} 404 - Course not found
 */
router.put('/update/:id', validateData(courseSchema), updateCourse);       // Update an existing course by ID

/**
 * Delete a course by ID.
 * @route DELETE /api/courses/remove/{id}
 * @param {number} id - Course ID
 * @returns {object} 204 - Course deleted
 * @returns {Error} 404 - Course not found
 */
router.delete('/remove/:id', deleteCourse);    // Delete a course by ID

export default router;
