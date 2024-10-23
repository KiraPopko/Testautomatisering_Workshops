import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { By, until, Key } from 'selenium-webdriver';

Given('that game is starded with joining game {string}', async function (url) {
    await this.driver.get(url);
    // Important: wait for the relevant DOM element(s) to exist
    // - we should choose to wait for an element we expect to only be in the DOM
    //   with correct content/text to verify that the app has fully loaded
    await '/descendant::*[@class="health"]//*[contains(text(), "50")]';
  });

  /*Then('that there are available all buttons {string}, {string}, {string}, {string}, {string}', async function (b1,b2,b3,b4,b5) {
   //
   //let enterCafe = await this.getByXPathWait('/descendant::*[@class="choices"]//*[contains(text(), "Enter the cafe")]');
  
  // let enterCafe = await this.getByXPath("//ul/li[text()='Enter the Cafe']/following::div[contains(@class, 'choices')]");
   

    let enterCafe = await '//ul/li[text()="Enter the Cafe"]/following-sibling::div[contains(@class, "choices")]';

    expect(enterCafe).to.exist;

    let wait = await '//ul/li[text()="wait"]/following-sibling::div[contains(@class, "choices")]';

    expect(enterCafe).to.exist;

    let north = await '//ul/li[text()="Go north"]/following-sibling::div[contains(@class, "choices")]';

    expect(north).to.exist;

    let south = await '//ul/li[text()="Go south"]/following-sibling::div[contains(@class, "choices")]';

    expect(south).to.exist;

    let help = await '//ul/li[text()="Help"]/following-sibling::div[contains(@class, "choices")]';

    expect(help).to.exist;
    
  });*/

  Then('that there are available all buttons {string}, {string}, {string}, {string}, {string}', async function (b1, b2, b3, b4, b5) {
    // Get the button elements using the given strings (b1, b2, etc.)
    const buttonXPaths = [
        `//ul/li[text()="${b1}"]/following-sibling::div[contains(@class, "choices")]`,
        `//ul/li[text()="${b2}"]/following-sibling::div[contains(@class, "choices")]`,
        `//ul/li[text()="${b3}"]/following-sibling::div[contains(@class, "choices")]`,
        `//ul/li[text()="${b4}"]/following-sibling::div[contains(@class, "choices")]`,
        `//ul/li[text()="${b5}"]/following-sibling::div[contains(@class, "choices")]`
    ];

    // Loop through each XPath and assert that the button exists
    for (let xpath of buttonXPaths) {
        let button = await xpath;
        expect(button).to.exist;
    }

    
});



/*Then('that there are exactly {int} elements in the class choices', async function (expectedCount) {
    const choicesXPath = '//div[contains(@class, "choices")]';
    
    // Find all elements that are children of the choices container
    const choices = await (`${choicesXPath}/*`);

    // Log the actual count of choices for debugging
    console.log('Actual count of choices:', choices.length);

    // Assert that the number of choices matches the expected count
    expect(choices).to.have.lengthOf(expectedCount);
});*/



  
  



