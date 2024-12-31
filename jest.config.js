module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
}; 