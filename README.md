
# Course Management System

A **Course Management System** that enables CRUD (Create, Read, Update, Delete) operations on course data. The system supports pagination, caching, and includes Swagger documentation for reference.

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Docker Setup](#docker-setup)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Error Handling and Logging](#error-handling-and-logging)

## Project Structure

```
.
├── src
│   ├── controllers            # Request handlers for API routes
│   ├── routes                 # API route definitions
│   ├── utils                  # Utility functions and helper files
│   ├── app.ts                 # Main app file
│   ├── swagger.ts             # Swagger setup for API documentation
├── tests                      # Unit and integration tests for controllers
├── jest.config.js             # Jest configuration file
├── Dockerfile                 # Docker configuration file
└── README.md                  # Project documentation
```

## Features

- **CRUD Operations**: Create, retrieve, update, and delete courses.
- **Pagination and Caching**: Efficient pagination and caching of course data.
- **Swagger Documentation**: Detailed API documentation with Swagger.
- **Testing**: Unit and integration tests for reliable functionality.

## Technologies Used

- **Node.js** and **Express**: Backend framework for building REST APIs.
- **TypeScript**: Strongly-typed programming language.
- **Jest**: Testing framework.
- **Swagger**: API documentation generation.
- **Postman**: Tool for manual testing of API endpoints.

## Getting Started

### Prerequisites
- Node.js (>=16)
- npm (>=8)

### Installation
1. Clone the repository:
   ```bash
   git clone 
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
## Building the project:
  ```bash
   npm run build
   ```

### Running the Project
Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000`.

## API Documentation

The API is documented using **Swagger** and can be accessed at `http://localhost:3000/api-docs` after starting the server.

## Testing

This project uses **Jest** for testing.

### Running Tests
To run all tests:
```bash
npm test
```
## Versioning
To update project's version:
```bash
npm version <patch|minor|major> 
```
## Packaging
to create a `.tgz` file for distribution:
```bash
npm run package
```


## Error Handling and Logging

- **Error Handling**: The API has a centralized error-handling mechanism for logging errors and sending user-friendly error messages.
- **Logging**: Uses Winston for structured logging, which helps in debugging and monitoring API requests and errors.


## License

This project is licensed under the MIT License. See the LICENSE.txt file for details.