// Import playwright module
import { test, expect } from "@playwright/test";

test.describe("SmokeTesting", () => {
  // Write a test
  test("Test 1", async ({ page }) => {
    // Go to URL
    await page.goto("https://www.youtube.com/");
  });
});

test.describe("RegressionTesting", () => {
  // Write a test
  test("Test 2", async ({ page }) => {
    // Go to URL
    await page.goto("https://www.youtube.com/");
  });

  // Write a test
  test("Test 3", async ({ page }) => {
    // Go to URL
    await page.goto("https://www.youtube.com/");
  });

  test("Test 4", async ({ page }) => {
    expect(true).toBe(false);
  });
});

//reporter is a configuration property that acceptsa reporter string or
// an array of reporter configurations, where each configuration is represented as an array.

/*
You can specify a single reporter:
reporter: 'html'

Or multiple reporters using an array of arrays:
reporter: [
  ['html'],
  ['list']
]
*/
