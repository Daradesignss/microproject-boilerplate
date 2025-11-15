import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    include: ["src/**/*.test.ts"], // only unit tests
    exclude: ["e2e/**", "node_modules/**", "dist/**"],
    coverage: {
      reporter: ["text", "lcov"],
      reportsDirectory: "coverage",
    },
  },
});
