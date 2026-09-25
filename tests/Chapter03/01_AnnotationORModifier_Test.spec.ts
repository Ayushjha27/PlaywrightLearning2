import { test, expect } from "@playwright/test";

test("Test 1", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.getByRole("link", { name: "Playwright by Testers Talk ✅" }).click();
  await expect(page.getByRole("link", { name: "Playwright by Testers Talk ✅" })).toBeVisible();
});

test.skip("Test 2", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.getByRole("link", { name: "Playwright by Testers Talk ✅" }).click();
  await expect(page.getByRole("link", { name: "Playwright by Testers Talk ✅" })).toBeVisible();
});

test.only("Test 3", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.getByRole("link", { name: "Playwright by Testers Talk ✅" }).click();
  await expect(page.getByRole("link", { name: "Playwright by Testers Talk ✅" })).toBeVisible();
});

// In above example only Test 3 will run.

//As soon as Playwright finds a test.only(), it runs only the tests marked .only().
//If there are multiple .only() tests, all of those .only() tests run.


// test() → defines a test
// test.skip() → annotation/modifier to skip a test
// test.only() → modifier to run only that test