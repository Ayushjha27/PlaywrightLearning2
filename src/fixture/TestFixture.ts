/*
Basic fixture syntax

<...> = type declaration
{...} = actual fixture definitions

export const test = base.extend<{
    fixtureName: FixtureType;
}>({
    fixtureName: async ({ page }, use) => {

        // setup
        const value = ...;

        await use(value);

        // teardown
    }
});

*/

// // Import Playwright's test and rename it to "base"
// // so we can extend it with our own custom fixture.
// import { test as base } from "@playwright/test";

// // Create a customized Playwright test by extending the base test.
// // "saveLogs" is our custom fixture and "void" means it provides no value.
// export const test = base.extend<{ saveLogs: void }>({
//   saveLogs: [
//     // Fixture function
//     // {} → no other fixture dependencies
//     // use → tells Playwright to continue and run the actual test
//     async ({}, use) => {
//       // Runs BEFORE the actual test
//       console.log("Global before is running...");

//       // Allows the actual test to run,Continue to the test, no value provided.
//       await use();

//       // Runs AFTER the actual test finishes
//       console.log("Global afterEach is running...");
//     },

//     // auto: true → automatically runs this fixture for every test
//     { auto: true },
//   ],
// });

// // Re-export Playwright's expect so test files can import
// // both "test" and "expect" from this custom fixture file.
// export { expect } from "@playwright/test";

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

// Import Playwright's test and rename it to "base"
// so we can extend it with our custom fixtures.
import { test as base } from "@playwright/test";

// Import Page Object classes
import { HomePage } from "../pages/HomePage";
import { ResultPage } from "../pages/ResultPage";
import { PlaylistPage } from "../pages/PlaylistPage";

/**
 * Custom Playwright test with reusable fixtures.
 */
export const test = base.extend<{
  // Fixture types
  saveLogs: void;
  homePage: HomePage;
  resultPage: ResultPage;
  playlistPage: PlaylistPage;
}>({
  // Custom fixture for global before/after logic
  saveLogs: [
    async ({}, use) => {
      // Runs before the actual test
      console.log("Global before is running...");

      // Allows the actual test to run.Continue to the test, no value provided.
      // No value is passed because this fixture returns void
      await use();

      // Runs after the actual test
      console.log("Global afterEach is running...");
    },

    // Automatically runs this fixture for every test
    { auto: true },
  ],

  // Creates and provides a HomePage object to the test
  homePage: async ({ page }, use) => {
    // Create HomePage object using Playwright's page fixture
    const homePage = new HomePage(page);

    // Pass HomePage object to the test, "Run the test and give the test this homePage object."
    await use(homePage);
  },

  // Creates and provides a ResultPage object to the test
  resultPage: async ({ page }, use) => {
    const resultPage = new ResultPage(page);

    // Pass ResultPage object to the test
    await use(resultPage);
  },

  // Creates and provides a PlaylistPage object to the test
  playlistPage: async ({ page }, use) => {
    const playlistPage = new PlaylistPage(page);

    // Pass PlaylistPage object to the test
    await use(playlistPage);
  },
});

// Re-export Playwright's expect
export { expect } from "@playwright/test";

/*
the reason saveLogs uses [] but homePage does not is because [] is being
 used for fixture configuration, specifically { auto: true }.

 Here the value is an array with 2 things:

[
   fixture function,
   fixture options
]

-------------------------------------------------------------------------
=> For homePage There is no need for fixture options,
 so you just provide the fixture function.

If your write   { auto: true }, homePage would become an automatic fixture.
That means every test would create a HomePage object even if the test doesn't use it.

*/
