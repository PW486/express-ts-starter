module.exports = {
  moduleDirectories: ['node_modules', 'dist'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  testMatch: ['**/dist/**/?(*.)+(spec|test).js?(x)'],
};
