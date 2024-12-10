
# Course Management System

A **Course Management System** that enables CRUD (Create, Read, Update, Delete) operations on course data. The system supports pagination, caching, and includes TypeDoc documentation for reference.


## Lecture 5 TODOs
1. 
- config file: https://github.com/weloeffect/Course2/blob/main/eslint.config.mjs
- Install Eslint:
 ```bash
npm install eslint --save-dev
npx eslint --init 
   ```
During initialization:
- Select "To check syntax and find problems"
- Select "JavaScript modules (import/export)"
- Select "None" for framework
- Select "yes" for Typescript
- Select "Node" for browser selection
- Confirm installation of the required dependencies.

Run:
 ```bash
npx npx eslint
   ```
to analyze the whole project.

 ```bash
npx eslint . --fix
   ```
to fix errors automatically.

2. 
- config file: https://github.com/weloeffect/Course2/blob/main/package.json

Install Husky and Lint-Staged:
 ```bash
npm install husky lint-staged --save-dev
   ```

Enable Husky:
 ```bash
npm run prepare
   ```
This will create a .husky directory in the project with the pre-commit hook already installed.

Runing the pre-commit hook:
Stage files:
 ```bash
git add .
   ```
Commit:
 ```bash
git commit -m "Test commit"
   ```

The pre-commit hook will run eslint --fix on all staged .ts files .

3. 
- logged files: https://github.com/weloeffect/Course2/blob/main/src/controllers/courseController.ts
              https://github.com/weloeffect/Course2/blob/main/src/middleware/errorHandler.ts
              https://github.com/weloeffect/Course2/blob/main/src/middleware/loggerMiddleware.ts
              https://github.com/weloeffect/Course2/blob/main/src/utils/logger.ts

Install Winston
 ```bash
npm install winston
   ```
Check the logged files for logging implementation.

4. 
- Test files: https://github.com/weloeffect/Course2/tree/main/src/utils/__tests__ (it is in this directory that all test files are present)
- config files: https://github.com/weloeffect/Course2/blob/main/src/jest.config.js
              https://github.com/weloeffect/Course2/blob/main/src/jest.setup.js
Install Jest:
 ```bash
npm install jest ts-jest @types/jest --save-dev
   ```

Create a Jest configuration file:
 ```bash
npx ts-jest config:init
   ```
Check the test files for Jest Implementation


## Lecture 6 TODOs
1. 
- License file: https://github.com/weloeffect/Course2/blob/main/LICENSE.txt

2. 
- README: https://github.com/weloeffect/Course2/blob/main/README.md

3. 
- documented files: https://github.com/weloeffect/Course2/blob/main/src/controllers/courseController.ts
                  https://github.com/weloeffect/Course2/blob/main/src/controllers/courseController.js
                  https://github.com/weloeffect/Course2/blob/main/src/middleware/errorHandler.js
                  https://github.com/weloeffect/Course2/blob/main/src/middleware/errorHandler.ts
                  https://github.com/weloeffect/Course2/blob/main/src/middleware/loggerMiddleware.js
                  https://github.com/weloeffect/Course2/blob/main/src/middleware/loggerMiddleware.ts
                  https://github.com/weloeffect/Course2/blob/main/src/middleware/rateLimiter.js
                  https://github.com/weloeffect/Course2/blob/main/src/middleware/rateLimiter.ts
                  https://github.com/weloeffect/Course2/blob/main/src/middleware/validateData.js
                  https://github.com/weloeffect/Course2/blob/main/src/middleware/validateData.ts
                  https://github.com/weloeffect/Course2/blob/main/src/routes/courseRoutes.js
                  https://github.com/weloeffect/Course2/blob/main/src/routes/courseRoutes.ts
                  https://github.com/weloeffect/Course2/blob/main/src/utils/MyError.js
                  https://github.com/weloeffect/Course2/blob/main/src/utils/MyError.ts
                  https://github.com/weloeffect/Course2/blob/main/src/utils/fileHandler.js
                  https://github.com/weloeffect/Course2/blob/main/src/utils/fileHandler.ts
                  https://github.com/weloeffect/Course2/blob/main/src/utils/logger.js
                  https://github.com/weloeffect/Course2/blob/main/src/utils/logger.ts

- config files: https://github.com/weloeffect/Course2/blob/main/tsconfig.json
              https://github.com/weloeffect/Course2/blob/main/typedoc.json

Install typedoc:
 ```bash
npm install typedoc --save-dev
   ```

Documentation Generation
 ```bash
npx typedoc --entryPointStrategy expand --out docs src
   ```
will generate the documentation in the docs folder.

4. 
- tutorial: https://github.com/weloeffect/Course2/blob/main/docs/tutorials/tutorial.md

5. 
- release: https://github.com/weloeffect/Course2/releases/tag/v0.2.0-alpha


## License

This project is licensed under the MIT License. See the LICENSE.txt file for details.
