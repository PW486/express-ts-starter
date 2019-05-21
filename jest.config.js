const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/dist/**/?(*.)+(spec|test).js?(x)'],
  moduleDirectories: ['node_modules', 'dist'],
};
