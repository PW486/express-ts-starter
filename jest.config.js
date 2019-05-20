module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/dist/**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/dist/$1'
  }
};
