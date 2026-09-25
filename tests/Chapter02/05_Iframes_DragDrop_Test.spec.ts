// Import playwright module
import { test, expect } from "@playwright/test";

test("Handling Iframes, Drag and Drop element in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://jqueryui.com/droppable/");

  const iframe = page.frameLocator('[class="demo-frame"]');

  // drag element, drop element
  const dragElement = iframe.locator('[id="draggable"]');
  const dropElement = iframe.locator('[id="droppable"]');

  await dragElement.dragTo(dropElement); // await source.dragTo(target);
});

/*

// Manual mouse drag-and-drop

//Sometimes dragTo() doesn't work because of the way the application implements drag/drop.
//Then you can manually control the mouse.

const source = page.locator('#source');
const target = page.locator('#target');

const sourceBox = await source.boundingBox();
const targetBox = await target.boundingBox();

if (sourceBox && targetBox) {

    // Move mouse to the center of source
    await page.mouse.move(
        sourceBox.x + sourceBox.width / 2,
        sourceBox.y + sourceBox.height / 2
    );

    // Press and hold mouse button
    await page.mouse.down();

    // Move to the center of target
    await page.mouse.move(
        targetBox.x + targetBox.width / 2,
        targetBox.y + targetBox.height / 2
    );

    // Release mouse button
    await page.mouse.up();
}

*/

// boundingBox().x and .y represent the top-left corner of the element's bounding rectangle,
// so adding width / 2 and height / 2 gives you the center coordinates.
