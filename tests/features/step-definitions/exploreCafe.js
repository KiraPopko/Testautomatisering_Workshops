import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
// Importera gemensamma steg (för att säkerställa att de är laddade)
import './commonSteps.js';

// Unika stegdefinitioner för exploreCafe
Then('I should see an image of the cafe', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});

Then('I should see an image displayed inside the cafe', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('inside-cafe.jpg');
});

Then('I should see a descriptive text explaining the scenario', async function () {
  const textElement = await this.driver.findElement(By.css('p.description'));
  const textContent = await textElement.getText();
  expect(textContent).to.be.a('string').and.not.empty;
});

Then('I should see the number of espressos increase to {int}', async function (expectedCount) {
  const espressoCountElement = await this.driver.findElement(By.css('.espressocups .val'));
  const actualCount = await espressoCountElement.getText();
  expect(parseInt(actualCount)).to.equal(expectedCount);
});
