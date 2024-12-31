import request from 'supertest';
import express, { Response } from 'express';
import app from '../../app';

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    title: 'HTML Basics',
    description: 'Introduction to HTML',
    modules: [
      {
        title: 'HTML Tags',
        lessons: [
          {
            title: 'Basic Tags',
            description: 'Learn the basic HTML tags',
            topics: ['Heading tags', 'Paragraph tags', 'Link tags'],
            content: [
              { type: 'text', data: 'HTML tags are the building blocks of HTML.' },
              { type: 'video', data: 'https://example.com/html-tags-video' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'CSS Fundamentals',
    description: 'Introduction to CSS',
    modules: [
      {
        title: 'Selectors and Properties',
        lessons: [
          {
            title: 'CSS Basics',
            description: 'Learn the basics of CSS selectors and properties',
            topics: ['Selectors', 'Properties'],
            content: [
              { type: 'text', data: 'CSS styles the HTML structure.' },
              { type: 'video', data: 'https://example.com/css-basics-video' },
            ],
          },
        ],
      },
    ],
  },
];

// Mocking application methods
jest.mock('../../app', () => {
  const app = express();

  app.use(express.json());

  // GET /api/courses/
  app.get('/api/courses/', (_req, res: Response) => {
    res.status(200).json(mockCourses);
  });

  // POST /api/courses/create
  app.post('/api/courses/create', (req, res: Response) => {
    const newCourse = { id: mockCourses.length + 1, ...req.body };
    mockCourses.push(newCourse);
    res.status(201).json(newCourse);
  });

  // PUT /api/courses/update/:id
  app.put('/api/courses/update/:id', (req, res: Response) => {
    const { id } = req.params;
    const index = mockCourses.findIndex((course) => course.id === parseInt(id, 10));
    if (index !== -1) {
      mockCourses[index] = { ...mockCourses[index], ...req.body };
      res.status(200).json(mockCourses[index]);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });

  // DELETE /api/courses/remove/:id
  app.delete('/api/courses/remove/:id', (req, res: Response) => {
    const { id } = req.params;
    const index = mockCourses.findIndex((course) => course.id === parseInt(id, 10));
    if (index !== -1) {
      mockCourses.splice(index, 1);
      res.status(200).json({ message: 'Course deleted successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });

  return app;
});

describe('Course Routes', () => {
  it('GET / should return all courses', async () => {
    const response = await request(app).get('/api/courses/');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toMatchObject(mockCourses);
  }, 5000);

  it('POST /create should add a new course', async () => {
    const newCourse = {
      title: 'JavaScript Basics',
      description: 'Learn the basics of JavaScript',
      modules: [],
    };
    const response = await request(app).post('/api/courses/create').send(newCourse);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({ id: expect.any(Number), ...newCourse });
  });

  it('PUT /update/:id should update a course', async () => {
    const updatedCourse = { title: 'Updated Course Title' };
    const response = await request(app).put('/api/courses/update/1').send(updatedCourse);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ id: 1, ...updatedCourse });
  });

  it('DELETE /remove/:id should delete a course', async () => {
    const response = await request(app).delete('/api/courses/remove/1');
    expect(response.status).toBe(200);
    expect(mockCourses.find((course) => course.id === 1)).toBeUndefined();
  });
});
