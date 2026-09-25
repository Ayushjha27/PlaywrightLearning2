// Import playwright module
import { test, expect } from "@playwright/test";


// To run Playwright tests by tag, use --grep:
// npx playwright test --grep "@smoke"

// If you mean run tests matching any of tags (OR):
// npx playwright test --grep "@SmokeTesting|@RegressionTesting|@SanityTesting"

// This runs tests with any one of those tags.

// If you mean tests containing all  tags (AND):
// npx playwright test --grep "@SmokeTesting.*@RegressionTesting.*@SanityTesting"

test("My First Playwright TypeScript Test 1", { tag: ["@SmokeTesting"] }, async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");

  await page.getByRole("link", { name: /Playwright by Testers Talk/i }).click();

  await expect(page.getByRole("heading", { name: /Playwright by Testers Talk/i })).toBeVisible();
});

test("My First Playwright TypeScript Test 2", { tag: ["@SmokeTesting", "@RegressionTesting"] }, async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");

  await page.getByRole("link", { name: /Playwright by Testers Talk/i }).click();

  await expect(page.getByRole("heading", { name: /Playwright by Testers Talk/i })).toBeVisible();
});

test("My First Playwright TypeScript Test 3", { tag: ["@RegressionTesting"] }, async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");

  await page.getByRole("link", { name: /Playwright by Testers Talk/i }).click();

  await expect(page.getByRole("heading", { name: /Playwright by Testers Talk/i })).toBeVisible();
});
