/*module.exports = { helloFlow };

async function helloFlow(page) {
  //
  // The code below is just a standard Playwright script:
  //
  // Go to https://artillery.io/
  await page.goto('https://artillery.io/');
  // Click text=Pricing
  await page.click('text=Pricing');
  // assert.equal(page.url(), 'https://artillery.io/pro/');
  // Click text=Sign up
  await page.click('text=Sign up');
}*/

 async function helloFlow(page) {
  //
  // The code below is just a standard Playwright script:
  //
  // Go to https://artillery.io/
  await page.goto('https://artillery.io/');
  // Click text=Pricing
  await page.click('text=Pricing');
  // assert.equal(page.url(), 'https://artillery.io/pro/');
  // Click text=Sign up
  await page.click('text=Sign up');
  
}

module.exports = { helloFlow };
