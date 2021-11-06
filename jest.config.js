module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.json' } },
  testMatch: ['**/test/**/*.test.(ts|tsx)'],
  // ...
  passWithNoTests: true,
};