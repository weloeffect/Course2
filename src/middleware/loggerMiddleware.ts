import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';


/**
 * Handles logging functionality.
 
 */

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
};

export default requestLogger;
