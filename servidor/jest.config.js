module.exports = {
  roots: [
    '<rootDir>/tests/',
  ],
  collectCoverageFrom: [
    "!<rootDir>/tests/**",
  ],
  coverageReporters: [
    'lcov',
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testEnvironment: 'node',
};
