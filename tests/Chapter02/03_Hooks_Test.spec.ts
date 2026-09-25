// Import playwright module
import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log(`Running before all tests...`);
});

test.beforeEach(async ({ page }) => {
  console.log(`Running before each tests...`);
 await page.goto("https://www.youtube.com/");
});

test.afterEach(async () => {
  console.log(`Running after each tests...`);
});

test.afterAll(async () => {
  console.log(`Running after all tests...`);
});

test("Test 1", async ({ page }) => {
  console.log("Test1 execution started...");
 
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.getByRole("link", { name: "Playwright by Testers Talk ✅" }).click();
  await expect(page.getByRole("link", { name: "Playwright by Testers Talk ✅" })).toBeVisible();
});

test("Test 2", async ({ page }) => {
  console.log("Test2 execution started...");
 
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.getByRole("link", { name: "Playwright by Testers Talk ✅" }).click();
  await expect(page.getByRole("link", { name: "Playwright by Testers Talk ✅" })).toBeVisible();
});
