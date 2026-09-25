// Import playwright module
import { test, expect } from "@playwright/test";
import testData from "../../test-data/qa/testdata.json";

//type is used to define the expected structure/blueprint/shape/type of data.
//  It helps TypeScript check your code before it runs.
type TestData = {
  TestDataSet1: {
    Skill1: string;
    Skill2: string;
  };
  TestDataSet2: {
    Skill1: string;
    Skill2: string;
  };
};

// Assume this imported JSON follows the TestData structure
const typedTestData = testData as TestData;
// or // const typedTestData: TestData = testData;

/*
testData = actual data
TestData = blueprint/type
typedTestData = actual data + TypeScript knows its expected structure
*/

for (const dataSetName in typedTestData) {
  // dataSetName is a variable containing the key, for...in → gives keys ,object[key] → gets the value for that key.

  const skill = typedTestData[dataSetName as keyof typeof typedTestData]; //or// typedTestData[dataSetName as keyof TestData]

  test(`Data Driven Testing Using JSON file in playwright : ${skill.Skill2}`, async ({ page }) => {
    console.log(`Data set name : ${dataSetName}`);
    console.log(`Skill : ${skill.Skill1}`);
    console.log(`Skill : ${skill.Skill2}`);

    // Go to URL
    await page.goto("https://www.google.com/");

    // Search with keywords
    await page.getByLabel("Search", { exact: true }).fill(skill.Skill2);
    await page.getByLabel("Search", { exact: true }).press("Enter");

    // Click on playlist
    await page.getByRole("link", { name: skill.Skill2 }).first().click();

    // Validate web page title
    await expect(page).toHaveTitle(skill.Skill2 + "☑️ - YouTube");
  });
}
