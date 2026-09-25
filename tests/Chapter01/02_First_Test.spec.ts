 // Import playwright module
import { test, expect } from "@playwright/test";

test("My First Playwright TypeScript Test", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.google.com/");

  // Search with keywords
  await page.getByLabel("Search", { exact: true }).fill("playwright by testers talk");
  await page.getByLabel("Search", { exact: true }).press("Enter");

  // Click on playlist

  await page.getByRole("link", { name: "Playwright by Testers Talk☑️" }).first().click();
  // first() is used in case multiple links match
  // It selects the first matching element

  // Validate web page title
  await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
});

//getByRole('combobox', { name: 'Search' })
 