import { test, expect } from "@playwright/test";

//Visual testing in Playwright means comparing the current UI with a
//  previously saved screenshot (baseline) to detect visual changes.

/*
First run
await expect(page).toHaveScreenshot('homepage.png');
If no baseline exists, Playwright creates one.

Later runs
It takes a new screenshot and compares it with the baseline.



=> page.screenshot() → just takes/saves a screenshot
=> expect(page).toHaveScreenshot() → takes a screenshot + compares it for visual testing

*/

test("Visual Comparison in Playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://github.com/login");

  // Compare page screnshots
  await expect(page).toHaveScreenshot("GitHubLoginPage.png");
  // at first run it will fails and creates a baseline/screenshot, but in later runs this will pass

  await page.locator("#login_field").fill("playwright with typescript");

  // Compare page screnshots
  await expect(page).toHaveScreenshot("GitHubLoginPage.png"); // this will fail, baseline mismatch
});

test("Element Visual Comparison in Playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://github.com/login");

  //await expect(page).toHaveScreenshot("GitHubLoginPage.png");

  // Compare element screnshots
  const element = page.locator('[class="authentication-body authentication-body--with-form new-session"]');
  await expect(element).toHaveScreenshot("GitHubLoginForm.png");

  // Compare element screnshots
  await page.locator("#login_field").fill("playwright with typescript");
  await expect(element).toHaveScreenshot("GitHubLoginForm.png");
});
