// Import playwright module
import { test, expect } from "@playwright/test";

test("Handling Dropdown list in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.facebook.com/");
  await page.getByRole("button", { name: "Create new account" }).click();

  // Select dropdown using value
  await page.getByLabel("Month").selectOption("3");

  // Select dropdown using visible text
  await page.getByLabel("Month").selectOption("Oct");

  // Validate all the options
  await expect(page.locator("#month > option")).toHaveText(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);

  /*  What it means
 // #month  -> selects the dropdown element with id="month"
 // > option -> selects all <option> elements inside the dropdown

#month > option
#month → select element with id month
> → direct child

option → all dropdown options

*/

  // toHaveText() checks that ALL option texts match this exact list,If any value is missing or different, the test will fail.
});

/*
// By value
await page.locator('select').selectOption({ value: 'us' });

// By label
await page.locator('select').selectOption({ label: 'USA' });

// By index
await page.locator('select').selectOption({ index: 1 });

*/

/*

The two main styles are:
// Locator-based
await page.locator('select').selectOption({ label: 'USA' });

// Page-based
await page.selectOption('select', { label: 'USA' });
*/
