module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/dist/**/?(*.)+(spec|test).js?(x)'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/dist/$1'
  }
};
