import { Request, Response } from 'express'
import logger from '../utils/logger';
import { MyError } from '../utils/MyError';

/**
 * Handles errors.
 * @param req Express request object
 * @param res Express response object
 * @returns error is returned with the specific message and status code
 */

const errorHandler = (err: Error | MyError, req: Request, res: Response) => {
  const statusCode = err instanceof MyError ? err.statusCode : 500;
  const message = err.message || 'An unexpected error occurred. Please try again';


  logger.error(`Error: ${message}, Status Code: ${statusCode}`);

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });

};

export default errorHandler;
