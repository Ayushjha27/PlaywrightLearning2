// Import playwright module
import { test, expect } from "@playwright/test";

test("Get Text & Get attribute value in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://github.com/BakkappaN");

  // Get element text & assert
  const name = await page.locator('[itemprop="name"]').innerText();
  const finalName = name?.trim();
  console.log(`Name is : ${finalName}`);
  expect(finalName).toBe("Testers Talk");

  // Get attribute value
  const attributeValue = await page.getByTestId("repositories").first().getAttribute("data-selected-links");
  console.log(`Attribute value is : ${attributeValue}`);
});

/*

innerText() gives	Visible/rendered text
textContent() gives	All text content in the DOM, including hidden text

Example:
<div>
  Hello
  <span style="display:none">Hidden</span>
</div>

await locator.innerText()  → "Hello"

await locator.textContent() → "Hello Hidden" (with whitespace depending on the DOM)

*/