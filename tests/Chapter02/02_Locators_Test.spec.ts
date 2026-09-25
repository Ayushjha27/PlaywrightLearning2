import { test, expect } from "@playwright/test";

test("Locators in Playwright", async ({ page }) => {
  // Go to URL
  //await page.goto("https://github.com/BakkappaN/");

  // GetByRole - getByRole() locates an element based on its accessible role and accessible name.
  //await page.getByRole("link", { name: "Sign in" }).click();

  // // GetBylabel - getByLabel() locates a form element using its associated label.
  // await page.getByLabel('Homepage', { exact: true }).first().click();

  // GetByAltText- getByAltText() locates an element using its alt attribute, mainly for images.
  //await page.getByAltText("View BakkappaN's full-sized avatar").click();

  // GetByTestId- getByTestId() locates an element using a test ID attribute, usually data-testid.
  //testIdAttribute is a Playwright configuration option that tells Playwright which HTML attribute
  //  to use when getByTestId() is called. Playwright's default testIdAttribute is: 'data-testid'
  // await page.getByTestId("projects").first().click();

  // GetByText- getByText() locates an element using its visible text content.
  // await page.getByText("Sign up", { exact: true }).click();

  // GetByPlaceholder- getByPlaceholder() locates an input/form element using its placeholder attribute.
  // await page.goto("https://www.youtube.com/@testerstalk");
  // await page.getByPlaceholder("Search").fill("cypress by testers talk");

  // Xpath( locator )
  //await page.locator('//input[@name="search_query"]').first().fill("playwright typescript by testers talk");

  // CSSSelectors( locator )
  // await page.locator('input[name="search_query"]').first().fill('playwright typescript by testers talk');

  // GetByTitle-It locates an element using its HTML title attribute
  await page.goto("https://www.google.com/");
  await page.getByTitle("Search").fill("playwright javascript by testers talk");
});
