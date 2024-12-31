import express, { Request, Response } from 'express';
import fs from 'fs';
import courseRoutes from './routes/courseRoutes';
import errorHandler from './middleware/errorHandler';
import requestLogger from './middleware/loggerMiddleware';
import rateLimiter from './middleware/rateLimiter';

const app = express();
const PORT = 3000;

app.use(express.json());



app.get('/', (req: Request, res: Response) => {
  res.send('Course Management System');
});

app.use('/api/courses', courseRoutes);


app.use(requestLogger);
app.use(rateLimiter); 


app.use(errorHandler);

if(process.env.NODE_ENV !== 'test'){
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

console.log("testing 123")
console.log("testing 456")






export default app;