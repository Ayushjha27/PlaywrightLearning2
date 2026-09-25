// Import playwright module
import { test, expect } from "@playwright/test";

test("Keyboard actions in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.google.com/");

  // Enter action from keyboard
  // await page.getByLabel('Search', {exact : true}).first().click();
  // await page.getByLabel('Search', {exact : true}).first().fill('playwright by testers talk');
  // await page.getByLabel('Search', {exact : true}).first().press('Enter');

  // Selecting & deleting from keyboard
  // await page.getByLabel('Search', {exact : true}).first().click();
  // await page.keyboard.press('Control+A');//sends it to the currently focused element.
  // await page.keyboard.press('Delete');//sends it to the currently focused element.

  // Press TAB and Enter
  await page.getByLabel("Search", { exact: true }).first().click();
  await page.keyboard.press("Tab"); //sends it to the currently focused element.
  await page.keyboard.press("Enter"); //sends it to the currently focused element.
});

/*
Yes. ✅ You can give the same locator path directly to press():

await page.getByLabel('Search', {exact : true}).first().click();
await page.getByLabel('Search', { exact: true }).first().press('Control+A');
await page.getByLabel('Search', { exact: true }).first().press('Delete');

But there is an even better way for clearing a search field:
=>await page.getByLabel('Search', { exact: true }).first().fill('');
*/
