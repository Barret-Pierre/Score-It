module.exports = {
  preset: 'jest-expo',
  testMatch: ['**/tests/**/*.spec.{ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: false, // désactivé par défaut, activé via --coverage en CI
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.types.ts', '!src/domain/models/**'],
};
