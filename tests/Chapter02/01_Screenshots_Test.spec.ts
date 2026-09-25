// Import playwright module
import { test, expect } from "@playwright/test";

test("Capture screenshots in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.youtube.com/@testerstalk");

  // Element screenshot
  await page.locator("#page-header-container").screenshot({ path: "./screenshots/ElementScreenshot.png" });

  // Page screenshot
  await page.screenshot({ path: "./screenshots/PageScreenshot.png" });

  // Full page screenshot
  await page.screenshot({ path: "./screenshots/FullPageScreenshot.png", fullPage: true });
});

/*
=> Attach screenshot into playwright test report
use: {
  screenshot: 'only-on-failure'
}
Then a screenshot is automatically attached when a test fails.

Main values:
1. screenshot: 'off' ➡️ No screenshots.
2. screenshot: 'on' ➡️ Take a screenshot for every test.
3. screenshot: 'only-on-failure' ➡️ Take a screenshot only when the test fails.

*/
