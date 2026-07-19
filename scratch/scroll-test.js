
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({width: 1920, height: 1080});
  await page.goto('http://localhost:3000');
  
  for(let i=0; i<6; i++) {
    await page.waitForTimeout(1000);
    await page.screenshot({path: 'scratch/scroll-' + i + '.png'});
    await page.evaluate(() => window.scrollBy(0, 1080));
  }
  await browser.close();
})();

