import { test, expect } from "@playwright/test";

test("Timeouts in Playwright ", async ({ page }) => {
  test.setTimeout(1 * 60 * 1000); // it is test-level timeout, it overrides Timeout if present in configfile
  // Go to URL
  await page.goto("https://www.google.com/");

  // Search with keywords
  await page.getByLabel("Search", { exact: true }).fill("playwright by testers talk");
  await page.getByLabel("Search", { exact: true }).press("Enter");

  // action timeout
  // Click on playlist
  await page.getByRole("link", { name: "Playwright by Testers Talk☑️" }).first().click({ timeout: 5000 });

  //assertion timeout
  // Validate web page title
  await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube", { timeout: 5000 });

  // await page.waitForTimeout(60000);
});

/*

⏱️ timeout
Controls the maximum time for one test to complete.
Pass: If the actual value matches the expected value, the assertion passes immediately.
Mismatch: Playwright keeps checking until the timeout expires; if it still 
doesn't match,the assertion fails.

// playwright.config.ts
export default defineConfig({
  timeout: 30 * 1000
});

Means:
Each individual test gets 30 seconds.

Example:

Test 1 → max 30 sec
Test 2 → max 30 sec
Test 3 → max 30 sec

If Test 1 takes more than 30 seconds → ❌ Test 1 times out.


🌍 globalTimeout
Controls the maximum time for the entire Playwright test run.

export default defineConfig({
  globalTimeout: 10 * 60 * 1000
});

Means:

The whole test suite/run can take at most 10 minutes.

Example:

Test 1 ── 20 sec
Test 2 ── 30 sec
Test 3 ── 40 sec
Test 4 ── ...
        ↓
Entire run must finish within 10 min

If the overall run exceeds 10 minutes → Playwright stops the run.

*/
