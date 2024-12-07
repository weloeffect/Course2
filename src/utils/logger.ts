import winston from 'winston';

const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'blue',
  },
};

winston.addColors(logLevels.colors);


const logger = winston.createLogger({
  levels: logLevels.levels,
  level: process.env.LOG_LEVEL || 'debug', // Default log level
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console(), // Logs to the console
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Logs errors to a file
    new winston.transports.File({ filename: 'logs/combined.log' }), // Logs all levels to a file
  ],
});

export default logger;
