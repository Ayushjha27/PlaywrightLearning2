// Import playwright module
import { test, expect } from "@playwright/test";

test("Test 1", async ({ page }) => {
  // // Go to URL
  // await page.goto("https://www.google.com/");

  // // Search with keywords
  // await page.getByLabel("Search", { exact: true }).fill("playwright by testers talk");
  // await page.getByLabel("Search", { exact: true }).press("Enter");

  // // Click on playlist
  // await page.getByRole("link", { name: "Playwright by Testers Talk☑️" }).first().click();

  // // Validate web page title
  // await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
});

test("Test 2", async ({ page }) => {
  expect(true).toBe(false);
});

test("Test 3", async ({ page }) => {
  expect(true).toBe(false);
});

/*
Note: Playwright remembers the previous run's failures in its test results,
 so this is useful for quickly rerunning failures after fixing an issue.

Playwright command to run the last failed test, use:
npx playwright test --last-failed

It runs only the tests that failed in the previous test run.
*/