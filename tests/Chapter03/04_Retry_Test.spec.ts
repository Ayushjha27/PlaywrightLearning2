import { test, expect } from "@playwright/test";

test("Record at cursor test", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM");
  await expect(page.getByRole("link", { name: "#1 Playwright Tutorial Full" })).toBeVisible();
  await expect(page.getByRole("link", { name: "#2 Playwright API Testing" })).toBeVisible();
  await expect(page.getByLabel("#1 Playwright Tutorial Full").locator("#video-title")).toContainText(
    "#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial",
  );
  await expect(page.getByLabel("#2 Playwright API Testing").locator("#video-title")).toContainText(
    "#2 Playwright API Testing Tutorial Crash Course 2024",
  );
});

/*
--retries useful for handling and identifying flaky tests.

npx playwright test --retries=4
➡️ If a test fails, Playwright will retry it up to 4 times.

- Specific file
npx playwright test tests/login.spec.ts --retries=4

-Specific test in a file
npx playwright test tests/login.spec.ts --grep "Login test" --retries=4

==> Configure it permanently In playwright.config.ts:
use: {
  // ...
},
retries: 4 ; //// Always 4 retries → Local: 4 retries , → CI: 4 retries

// retries: process.env.CI ? 2 : 4 // Local: 4 retries , → CI: 2 retries

Which is commonly used?

A common real-world configuration is:
=> retries: process.env.CI ? 2 : 0



// **Note: If you configure something in playwright.config.ts, 
// you don't need to mention it in the command every time. But you can override config from CLI

// Config = default behavior
// CLI option = override for that particular run

*/
