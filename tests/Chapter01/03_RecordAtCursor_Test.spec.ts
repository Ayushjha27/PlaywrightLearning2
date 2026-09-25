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
 
  Node.js installation
  1. node -v
  2. npm -v

  Playwwight setup commands
  1. npm init -y  // This creates package.json
  2. npm init playwright@latest // Install Playwright
  3. npx playwright --version // Check Playwright installation
  4. npx playwright test // Run the sample test

*/

/*
1. Run specific spec
npx playwright test tests/login.spec.ts
=> Headless is the default.Headless mode means the browser runs without showing the browser window/UI.

2. Particular file — headed
npx playwright test tests/login.spec.ts --headed

3. Config trick

In playwright.config.ts:

use: {
  headless: false
}

Then: npx playwright test tests/login.spec.ts runs headed.

4. Run a specific test in a file in headed mode.
npx playwright test tests/login.spec.ts --grep "valid login" --headed

5.Run Playwright tests on different browsers using CMD

Chrome:
npx playwright test --project=chromium

Firefox:
npx playwright test --project=firefox

Microsoft Edge:
npx playwright test --project=MicrosoftEdge

=> These project names must match the projects configured in your playwright.config.ts.

6. Playwright's UI Mode, use --ui.
 UI Mode provides a watch-like experience. It can detect changes and let you re-run tests easily.

npx playwright test --ui means: Run Playwright in UI Mode.

It opens the Playwright UI Mode, where you can select tests, run/re-run them,
inspect results, and develop/debug tests interactively.

Specific test file - npx playwright test tests/login.spec.ts --ui
Specific test in a file - npx playwright test tests/login.spec.ts --ui --grep "valid login"


7. Trace Viewer = Playwright's visual debugging tool that lets you inspect a test execution 
step-by-step,including actions, screenshots/snapshots, network, console, and failures.


How to enable trace- In playwright.config.ts

use: {
  trace: 'on'
}

Common options: trace: 'off' , trace: 'on' , trace: 'retain-on-failure', trace: 'on-first-retry'

=> To View the trace, you can open it with: npx playwright show-trace trace.zip


8. Tags- a label assigned to a test to categorize it and selectively execute related tests.

// To run Playwright tests by tag, use --grep:
// npx playwright test --grep "@smoke"

// If you mean run tests matching any of tags (OR):
// npx playwright test --grep "@SmokeTesting|@RegressionTesting|@SanityTesting"

// This runs tests with any one of those tags.

// If you mean tests containing all  tags (AND):
// npx playwright test --grep "@SmokeTesting.*@RegressionTesting.*@SanityTesting"


9. --repeat-each=3 → Repeat every selected test 3 times

-> For a specific file:
npx playwright test tests/login.spec.ts --repeat-each=3

-> For a specific test:
npx playwright test tests/login.spec.ts --grep "Login test" --repeat-each=3

=> We use --repeat-each mainly to check test stability and flaky tests(passes sometimes,fails sometimes)


10. --retries useful for handling and identifying flaky tests.

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


11. Playwright command to run the last failed test, use:
npx playwright test --last-failed

It runs only the tests that failed in the previous test run.


12. Parallel test execution in Playwright

-> Specific test using --grep
npx playwright test tests/login.spec.ts --grep "Login test" --workers=2

-> In config file
workers: process.env.CI ? 1 : 2

**Priority: CLI option > config file.

*/
