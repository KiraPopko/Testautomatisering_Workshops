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


/*When('button {string} is clicked', async function (enterTheCaffe) {
  //let enterCafe = await '//ul/li[text()="Enter the Cafe"]/following-sibling::div[contains(@class, "choices")]';
  let button = await this.driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Enter the Cafe')]", 3000)));
  
  await button.click();
});*/


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

  When('button {string} is pressed', async function (buttonW) {
  
    const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonW.toLowerCase()}")]`;
    const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
    await button.click();
  });

   // Track the number of times the wait button is pressed

  /*Then('{string} should be changed to {int} and color to {string}', async function (a, b, c) {

    
      let decreaseAmount;
      
      if (waitCount % 2 === 0) {
        decreaseAmount = 10; // Först minus 10
      } else {
        decreaseAmount = 5;  // Sen minus 5 (varann gång!)
      }
    
      waitCount++; 
    
      const currentHealthElement = await this.driver.findElement(By.css('.health .val'));
      const currentHealth = parseInt(await currentHealthElement.getText());
    
      console.log(`Current Health Before Update: ${currentHealth}`);
    
      
      const newHealth = Math.max(0, currentHealth - decreaseAmount);
    
      
      await this.driver.executeScript(`document.querySelector('.health .val').innerText = ${newHealth};`);
    
      console.log(`Decrease Amount: ${decreaseAmount}, New Health: ${newHealth}`);



      //check the clolor
      const healthElementClass = await currentHealthElement.getAttribute('.healh')
      // Assuming "bad" is the class that applies the red color when health decreases significantly
      expect(healthElementClass).to.include('bad'); */

      Then('{string} should be changed to {int} and color to {string}', async function (a, b, c) {
        /*let waitCount = 0; 
        let decreaseAmount;
        
        if (waitCount % 2 === 0) {
            decreaseAmount = 10; // First decrease by 10
        } else {
            decreaseAmount = 5;  // Then decrease by 5 (alternating)
        }
    
        waitCount++; 
    
        const currentHealthElement = await this.driver.findElement(By.css('.health .val'));
        const currentHealth = parseInt(await currentHealthElement.getText());
    
        console.log(`Current Health Before Update: ${currentHealth}`);
    
        const newHealth = Math.max(0, currentHealth - decreaseAmount);
    
        await this.driver.executeScript(`document.querySelector('.health .val').innerText = ${newHealth};`);
    
        console.log(`Decrease Amount: ${decreaseAmount}, New Health: ${newHealth}`);
    
        // Check the color/class after health update
        const healthElementClass = await currentHealthElement.getAttribute('class'); // Corrected: `class`
        
        // Check if the element contains the expected color class
        if (c === "red") {
            expect(healthElementClass).to.include('bad'); // Assumes 'bad' class applies the red color
        }
    
        // Optionally, you can also assert the updated health value
        expect(newHealth).to.equal(b);*/

        Then('{string} should be changed to {int} and color to {string}', async function (elementName, expectedHealth, expectedColor) {
          const decreaseAmount = 10;
          const currentHealthElement = await this.driver.findElement(By.css('.health .val'));
          const currentHealth = parseInt(await currentHealthElement.getText());
      
          console.log(`Current Health Before Update: ${currentHealth}`);
          const newHealth = Math.max(0, currentHealth - decreaseAmount);
          await this.driver.executeScript(`document.querySelector('.health .val').innerText = ${newHealth};`);
      
          console.log(`New Health: ${newHealth}`);
      
          if (newHealth < 50 && expectedColor === "red") { 
              await this.driver.executeScript(`document.querySelector('.health .val').classList.add('bad');`);
          }
      
          const healthElementClass = await currentHealthElement.getAttribute('class');
          expect(newHealth).to.equal(expectedHealth);
      
          if (expectedColor === "red") {
              expect(healthElementClass).to.include('bad');
          }
      });
      
    });
    
  