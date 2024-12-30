import { Request, Response, NextFunction } from 'express';
import { readData, writeData } from '../utils/fileHandler';
import { MyError } from '../utils/MyError';
import logger from '../utils/logger';
import { RequestHandler } from 'express';
import redis from '../config/redis';

const COURSE_FILE = 'courses.json';

const cache: { [key: string]: any } = {};

/**
 * Gets available courses.
 * @param req Express request object
 * @param res Express response object
 * @returns all available courses are returned
 */


export const getAllCourses: RequestHandler = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const cacheKey = `page-${page}-limit-${limit}`;

    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      logger.info(`Cache hit for ${cacheKey}`);
      res.status(200).json(JSON.parse(cachedData));
      return;
    }

    const courses = readData(COURSE_FILE);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedCourses = courses.slice(startIndex, endIndex);

    const response = {
      data: paginatedCourses,
      page,
      limit,
      total: courses.length,
    };

    await redis.setex(cacheKey, 900, JSON.stringify(response));
    res.status(200).json(response);
  } catch (error) {
    logger.error('Failed to fetch paginated courses with caching', { error });
    next(error);
  }
};

/**
 * Gets a specific course only.
 * @param req Express request object
 * @param res Express response object
 * @returns Only one course is returned by Id
 */

export const getCourseById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const courses = readData(COURSE_FILE);
        const course = courses.find((c: any) => c.id === parseInt(req.params.id));
    
        if (!course) {
          throw new MyError('Course not found', 404);
        }
    
        logger.info(`Fetched course with ID ${req.params.id}`, { courseId: req.params.id });
        res.status(200).json(course);
      } catch (error) {
        logger.error(`Failed to fetch course with ID ${req.params.id}`, { error });
        next(error);
      }
};

/**
 * Creates a new course.
 * @param req Express request object
 * @param res Express response object
 * @returns a response with the new course is returned
 */
export const createCourse = (req: Request, res: Response, next: NextFunction) => {
    try {
        const courses = readData(COURSE_FILE);
        const newCourse = { id: courses.length + 1, ...req.body };
        courses.push(newCourse);
        writeData(COURSE_FILE, courses);
    
        logger.info('Created new course', { courseId: newCourse.id });
        res.status(201).json(newCourse);
      } catch (error) {
        logger.error('Failed to create course', { error });
        next(error);
      }
  };

/**
 * Modifies an existing course.
 * @param req Express request object
 * @param res Express response object
 * @returns a confirmation response that the course was modified is returned
 */
  export const updateCourse = (req: Request, res: Response, next: NextFunction) => {
    try {
        const courses = readData(COURSE_FILE);
        const index = courses.findIndex((c: any) => c.id === parseInt(req.params.id));
    
        if (index === -1) {
          throw new MyError('Course not found', 404);
        }
    
        courses[index] = { ...courses[index], ...req.body };
        writeData(COURSE_FILE, courses);
    
        logger.info(`Updated course with ID ${req.params.id}`, { courseId: req.params.id });
        res.status(200).json(courses[index]);
      } catch (error) {
        logger.error(`Failed to update course with ID ${req.params.id}`, { error });
        next(error);
      }
  };

/**
 * Deletes a specific course.
 * @param req Express request object
 * @param res Express response object
 * @returns a confirmation response that the course has been deleted is returned.
 */

export const deleteCourse = (req: Request, res: Response, next: NextFunction) => {
    try {
        const courses = readData(COURSE_FILE);
        const index = courses.findIndex((c: any) => c.id === parseInt(req.params.id));
    
        if (index === -1) {
          throw new MyError('Course not found', 404);
        }
    
        const deletedCourse = courses.splice(index, 1)[0];
        writeData(COURSE_FILE, courses);
    
        logger.info(`Deleted course with ID ${req.params.id}`, { courseId: req.params.id });
        res.status(200).json(`course with ID ${req.params.id} is deleted`);
      } catch (error) {
        logger.error(`Failed to delete course with ID ${req.params.id}`, { error });
        next(error);
      }
};
