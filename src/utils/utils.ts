import { chromium, Page } from 'playwright';

export async function parseNewTokens(): Promise<string[]> {
  // Launch a browser instance
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  // Open a new page
  const page: Page = await context.newPage();

  // Go to the page
  await page.goto('https://fun.unibot.app/');

  // Wait for the elements to load
  await page.waitForSelector('.col-xl-4.col-lg-6.mainFeedPoolType_fun');

  // Extract IDs of all elements with the specified classes
  const feedItemIDs: string[] = await page.$$eval('.col-xl-4.col-lg-6.mainFeedPoolType_fun', (elements) => 
    elements.map(element => element.id)
  );

  // Extract parts after the underscore
  const partsAfterUnderscore: string[] = feedItemIDs.map(id => id.split('_')[1]);

  // Close the browser
  await browser.close();
  
  return partsAfterUnderscore;
}