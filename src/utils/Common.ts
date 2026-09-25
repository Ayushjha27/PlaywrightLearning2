import { expect, Page } from "@playwright/test";

//Create an asynchronous function called loginToApplication, which accepts a Playwright Page object
// and export it so other files can use it.

export async function loginToApplication(page: Page) {
  await page.goto("https://bakkappan.github.io/Testers-Talk-Practice-Site");
  await expect(page.locator("#siteHeader")).toContainText("Testers Talk: A Practice Space for Passionate QA Minds");
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("TestersTalk");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("TestersTalk");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Welcome to Testers Talk!")).toBeVisible();
  await expect(page.locator("#welcomeMsg")).toContainText("Welcome to Testers Talk!");
}

export async function downloadAndValidateFileName(page: Page, Btn: string, fileName: string) {
  const [download] = await Promise.all([page.waitForEvent("download"), page.getByRole("link", { name: Btn }).click()]);

  console.log("Downloaded filename : " + download.suggestedFilename());
  expect(download.suggestedFilename()).toBe(fileName);

  if (download.suggestedFilename().includes(".xlsx")) {
    await download.saveAs("./downloads/Downloaded_Excel_File.xlsx");
  } else if (download.suggestedFilename().includes(".docx")) {
    await download.saveAs("./downloads/Downloaded_Word_File.docx");
  } else if (download.suggestedFilename().includes(".xml")) {
    await download.saveAs("./downloads/Downloaded_XML_File.xml");
  } else if (download.suggestedFilename().includes(".pdf")) {
    await download.saveAs("./downloads/Downloaded_PDF_File.pdf");
  }
}
