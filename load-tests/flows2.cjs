
module.exports = { matAffarFlow };

 async function matAffarFlow(page) {
  //
  // The code below is just a standard Playwright script:
  //
  // Go to http://127.0.0.1:4000
  //await page.goto('http://127.0.0.1:4000');
  await page.goto('http://127.0.0.1:4000/');

  // Click text=....
  await page.click('text=Skafferi');
  //await page.locator('div').filter({ hasText: /^Skafferi\+$/ }).getByRole('button').click();
  
}


