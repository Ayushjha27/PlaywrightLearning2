import { test, expect } from "@playwright/test";

//test.describe() is used to group related tests together.
/*
test.describe('Login Tests', () => {

  test('Valid login', async ({ page }) => {
    // ...
  });

  test('Invalid login', async ({ page }) => {
    // ...
  });

});


//-----------------------------------------------------------------------------------------

Why use describe()?

Mainly for:
Grouping related tests
Organizing the test report
Applying common hooks like beforeEach / afterEach
Applying modifiers to a group


For example:

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('Valid login', async ({ page }) => {});
  test('Invalid login', async ({ page }) => {});

});
The beforeEach runs before each test inside that group.


=> You can also skip/only a whole group
test.describe.skip('Login Tests', () => {
  // all tests skipped
});
test.describe.only('Login Tests', () => {
  // only tests in this group run
});


*/

test.describe("Smoke Testing", () => {
  test("Test 1", async ({ page }) => {
    await page.goto("https://www.youtube.com/");

    await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
    await page.getByRole("combobox", { name: "Search" }).press("Enter");

    await page.getByRole("link", { name: /Playwright by Testers Talk/i }).click();

    await expect(page.getByRole("heading", { name: /Playwright by Testers Talk/i })).toBeVisible();
  });
});

test.describe("Regression Testing", () => {
  test("Test 2", async ({ page }) => {
    await page.goto("https://www.youtube.com/");

    await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
    await page.getByRole("combobox", { name: "Search" }).press("Enter");

    await page.getByRole("link", { name: /Playwright by Testers Talk/i }).click();

    await expect(page.getByRole("heading", { name: /Playwright by Testers Talk/i })).toBeVisible();
  });

  test("Test 3", async ({ page }) => {
    await page.goto("https://www.youtube.com/");

    await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
    await page.getByRole("combobox", { name: "Search" }).press("Enter");

    await page.getByRole("link", { name: /Playwright by Testers Talk/i }).click();

    await expect(page.getByRole("heading", { name: /Playwright by Testers Talk/i })).toBeVisible();
  });
});
