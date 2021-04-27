module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./src",
  setupFilesAfterEnv: ["<rootDir>/tests/setupTestsAfterEnv.ts"],
};
