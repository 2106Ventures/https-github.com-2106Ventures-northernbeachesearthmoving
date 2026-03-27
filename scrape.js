import { chromium } from 'playwright';

async function scrape() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.northernbeachesearthmoving.com.au/');
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text);
  await browser.close();
}

scrape().catch(console.error);
