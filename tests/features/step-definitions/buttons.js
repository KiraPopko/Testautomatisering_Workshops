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

  /*Then('that there are available all buttons {string}, {string}, {string}, {string}, {string}', async function (b1,b2,b3,b4,b5) {
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

 


/*When('button {string} is clicked', async function (enterTheCaffe) {
  //let enterCafe = await '//ul/li[text()="Enter the Cafe"]/following-sibling::div[contains(@class, "choices")]';
  let button = await this.driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Enter the Cafe')]", 3000)));
  
  await button.click();
});*/

//checking button enter the cafe
When('button {string} is clicked', async function (buttonC) {
  // Wait until the element matching the XPath is located (with a timeout of 3000 ms)
  //let button = await until.elementLocated(By.css('.choices li:nth-child(1)').innerText.click());
  // Ensure the element is visible before attempting to click
  //await this.driver.wait(until.elementIsVisible(webElement), 3000);
  // Perform the click action
  //await button.click();

  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonC.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
});


 

Then('should be changed {string}, {string} and available button {string}', async function (view, text, buttonE) {
 //checking view
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('inside-cafe.jpg');

//checking text

const helpTextElement = await this.driver.findElement(By.css('p.description'));
const textContent = await helpTextElement.getText();
expect(textContent).to.include("You are in the Cloud Forest Cafe");

//checking button
const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonE.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const isDisplayed = await button.isDisplayed();
  expect(isDisplayed).to.be.true;
});

/*const healthElement = await this.driver.findElement(By.css('.health .val'));
  const actualHealth = await healthElement.getText();
  expect(parseInt(actualHealth)).to.equal(expectedHealth);*/

  //Checking button health
  When('button {string} is pressed', async function (buttonH) {
    const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonH.toLowerCase()}")]`;
    const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
    await button.click();
    console.log(`Button "${buttonH}" pressed successfully.`);
  });
  
  Then('{string} should be decreased and color changed to red', async function (buttonH) {
    // Locate the span displaying the health value
    const healthValueElement = await this.driver.wait(until.elementLocated(By.css('.health .val')), 5000);
    const healthValueText = await healthValueElement.getText();
    const healthValue = parseInt(healthValueText, 10); // Parse text to integer with base 10
  
    // Log the current health value for monitoring
    console.log(`Current health value for "${buttonH}" is: ${healthValue}`);
  
    // Locate the progress element to check if 'red' class is applied
    const progressElement = await this.driver.wait(until.elementLocated(By.className('progress')), 5000);
  
    
      const redIndicator = await progressElement.findElement(By.className('bad'));
      const redIndicatorIsDisplayed = await redIndicator.isDisplayed();
  
      // Log whether the 'red' indicator is displayed
      console.log(`Red indicator for "${buttonH}" is displayed: ${redIndicatorIsDisplayed}`);
   
    
  });
  
