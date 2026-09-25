import { test, expect } from "@playwright/test";

//test.step() in Playwright is used to group a set of test actions into a named step.
//It makes your test report easier to read and helps you understand which part of the test failed.

test("test", async ({ page }) => {
  await test.step("Navigating to URL", async () => {
    await page.goto("https://github.com/");
    await page.getByRole("link", { name: "Sign in" }).click();
  });

  await test.step("Enter username & password", async () => {
    await page.getByRole("textbox", { name: "Username or email address" }).click();
    await page.getByRole("textbox", { name: "Username or email address" }).fill("ayushjha");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("1223");
  });

  await test.step("Click on sign in", async () => {
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });

  await test.step("Validate error message", async () => {
    await expect(page.getByRole("alert")).toContainText("Incorrect username or password.");
  });
});

// ---------------------------COMMENTED CODE -------------------------------------------------//

/* // We are importing two important things from Playwright
// test  -> used to create a test case
// expect -> used to verify (assert) something
import { test, expect } from "@playwright/test";

// test("test", async ({ page }) => { ... })
//
// "test" is the name of the test case.
// async means this function works with asynchronous operations (like browser actions).
// { page } is a Playwright fixture.
// "page" represents one browser tab.
test("test", async ({ page }) => {
  // test.step() is used to divide the test into logical steps.
  // It helps in better reporting and debugging.
  // If something fails, you can see exactly which step failed.

  await test.step("Navigating to URL", async () => {
    // page.goto() opens the given URL in the browser
    await page.goto("https://github.com/");

    // getByRole() finds element using ARIA role (recommended way in Playwright)
    // Here it finds a link (<a> tag automatically has role="link")
    // name: "Sign in" means it matches visible text "Sign in"
    await page.getByRole("link", { name: "Sign in" }).click();
  });

  await test.step("Enter username & password", async () => {
    // Find the username textbox by role
    // textbox role automatically applies to <input type="text">
    await page.getByRole("textbox", { name: "Username or email address" }).click();

    // fill() clears existing value and types new value
    await page.getByRole("textbox", { name: "Username or email address" }).fill("ayushjha");

    // Find password textbox
    // Password input also has role="textbox"
    await page.getByRole("textbox", { name: "Password" }).click();

    // Fill password
    await page.getByRole("textbox", { name: "Password" }).fill("1223");
  });

  await test.step("Click on sign in", async () => {
    // Here we are locating a button
    // role="button" automatically applies to <button>
    // exact: true ensures it matches EXACT text "Sign in"
    // This avoids matching something like "Sign in with Google"
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });

  await test.step("Validate error message", async () => {
    // expect() is assertion.
    // We are checking if an element with role="alert" contains specific text.
    // role="alert" is commonly used for error messages.
    await expect(page.getByRole("alert")).toContainText("Incorrect username or password.");

    // If this text is not found, test will FAIL.
  });
});
 */
