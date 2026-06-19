module.exports = {
  preset: 'jest-expo',
  testMatch: ['**/tests/**/*.spec.{ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
  },
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*constants.ts',
    '!src/**/*data.ts',
    '!src/**/*index.ts',
    '!src/**/*.d.ts',
    '!src/domain/models/**',
    '!src/theme/**',
    '!src/**/*.styles.ts',
  ],
};
