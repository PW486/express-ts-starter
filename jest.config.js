module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/dist/**/?(*.)+(spec|test).js?(x)'],
  moduleDirectories: ['node_modules', 'dist'],
};
