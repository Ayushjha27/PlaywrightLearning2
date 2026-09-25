// import { loginToApplication } from "../../src/utils/Common";
// import { test, expect } from "@playwright/test";

// test("Download file in playwright", async ({ page }) => {
//   await loginToApplication(page);

// // Promise.all() waits for the download event and the click action together.
// // The click triggers the download, so we start listening for the download
// // before clicking to make sure Playwright does not miss the download event.
// const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('link', { name: 'Download Excel' }).click()
// ]);
// // waitForEvent() listens for the download while click() triggers it.
// // Promise.all() waits for both operations to complete.Promise.all() returns an array of results

//   console.log("Downloaded filename: " + download.suggestedFilename());

//   await expect(download.suggestedFilename()).toBe("TestersTalk.xlsx");

//   await download.saveAs("./downloads/TestersTalk123.xlsx");
// });

import { expect, test } from "@playwright/test";
import { downloadAndValidateFileName, loginToApplication } from "../../src/utils/Common";

test("Download file in playwright", async ({ page }) => {
  // Login to Testers Talk
  await loginToApplication(page);

  // Download Excel file & validate downloaded file name
  await downloadAndValidateFileName(page, "Download Excel", "TestersTalk.xlsx");

  // Download word file & validate downloaded file name
  await downloadAndValidateFileName(page, "Download Word", "TestersTalk.docx");

  // Download XML file & validate downloaded file name
  await downloadAndValidateFileName(page, "Download XML", "TestersTalk.xml");

  // Download PDF file & validate downloaded file name
  await downloadAndValidateFileName(page, "Download PDF", "TestersTalk.pdf");
});
