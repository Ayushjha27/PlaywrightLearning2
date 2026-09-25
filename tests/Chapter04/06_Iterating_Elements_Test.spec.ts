// Import playwright module
import { test, expect } from "@playwright/test";

test("Iterating matching elements in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://github.com/BakkappaN");

  // for...of + .all()
  const repositoryLinks = await page.locator(".repo").all();
  for (const repositoryLink of repositoryLinks) {
    const text = await repositoryLink.textContent();
    console.log(`Text from 1st for loop: ${text}`);
  }

  // repositoryLinks is an array of Locators, so for...of directly gives you each Locator.

  console.log(`==========================`);

  //   // .all() + length + For loop + using index
  for (let index = 0; index < repositoryLinks.length; index++) {
    const text = await repositoryLinks[index].textContent();
    console.log(`Text from 2nd for loop: ${text}`);
  }

  // .all() returns an array, so you can use .length and [index].

  console.log(`==========================`);

  //  for loop + .count()  .nth()
  const repositoryLinks2 = page.locator(".repo");
  const count = await repositoryLinks2.count();
  for (let index = 0; index < count; index++) {
    const text = await repositoryLinks2.nth(index).textContent();
    console.log(`Text from 3rd for loop: ${text}`);
  }

  // Here you don't create an array. count() tells you how many matching elements exist.
  //  .nth(0) → first matching element  ;    .nth(1) → second    ;    .nth(2) → third
});
