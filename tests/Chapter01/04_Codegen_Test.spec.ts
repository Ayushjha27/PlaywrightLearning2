import { test, expect } from "@playwright/test";

test("Codegen test case", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.getByRole("link", { name: "Playwright by Testers Talk ✅" }).click();
  await expect(page.getByRole("link", { name: "Playwright by Testers Talk ✅" })).toBeVisible();
});

//The Playwright CLI command for Codegen is: npx playwright codegen.
// This opens a browser and starts recording your actions.

//Open a specific website-  npx playwright codegen https://www.saucedemo.com
//Then Playwright will generate code as you interact with the site.

/*
1. VS Code → Record new
When you click: Record new then VS Code Playwright extension starts its recording workflow.

2. npx playwright codegen- Playwright opens browser and playwright inspector
*/
