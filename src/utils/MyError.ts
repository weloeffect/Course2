export class MyError extends Error {
    public statusCode: number;
  
/**
 * Error handler.
 */


    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  