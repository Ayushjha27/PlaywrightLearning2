// Import playwright module
import { test, expect } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

//This says: Every record should be an object containing Skill1 and Skill2,
// and both values must be strings.
type TestRecords = {
  Skill1: string;
  Skill2: string;
};

  
//Build the path → find the file → read the file.

const records = parse(fs.readFileSync(path.join(__dirname, "../../test-data/qa/testdata.csv")), {
  columns: true, // Use the first row as the property names/keys.
  skipEmptyLines: true,
}) as TestRecords[]; // TestRecords[] means: An array containing objects of type TestRecords.
// tell TypeScript to treat the result as an array of TestRecords

//or
/*
const records: TestRecords[] = parse(
  fs.readFileSync(path.join(__dirname, "../../test-data/qa/testdata.csv")),
  {
    columns: true,
    skipEmptyLines: true,
  }
);
*/

//readFileSync() → reads the file
//parse() → converts the CSV data into usable JavaScript-style objects
// parse() comes from a CSV parsing library.

/*

[
  {
    Skill1: "Playwright",
    Skill2: "Cypress"
  },
  {
    Skill1: "JavaScript",
    Skill2: "Postman"
  }
]

*/

for (const record of records) {
  test(`Data Driven Testing Using CSV file in playwright : ${record.Skill1}`, { tag: ["@DataDrivenTesting"] }, async ({ page }) => {
    console.log(`CSV file row data`);
    console.log(`Skill 1 : ${record.Skill1}`);
    console.log(`Skill 2 : ${record.Skill2}`);

    // Go to URL
    await page.goto("https://www.google.com/");

    // Search with keywords
    await page.getByLabel("Search", { exact: true }).fill(record.Skill1);
    await page.getByLabel("Search", { exact: true }).press("Enter");

    // Click on playlist
    await page.getByRole("link", { name: record.Skill1 }).first().click();

    // Validate web page title
    await expect(page).toHaveTitle(record.Skill1 + "☑️ - YouTube");
  });
}
