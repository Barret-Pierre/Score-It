module.exports = {
  preset: "jest-expo",
  testMatch: ["**/tests/**/*.spec.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
