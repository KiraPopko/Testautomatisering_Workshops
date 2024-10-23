import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

const url = "http://localhost:3000";

// Common Step Definitions
Given('that I am outside the cafe', async function () {
  await this.driver.get(url);
});

When('I wait without taking action', async function () {
  // Nothing happens, just wait
});

When('I click the {string} button', async function (buttonText) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
});

// Verification Steps
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

// New Step Definitions for Player Interactions
Then('I should see the number of espressos increase to {int}', async function (expectedCount) {
  const espressoCountElement = await this.driver.findElement(By.css('.espressocups .val'));
  const actualCount = await espressoCountElement.getText();
  expect(parseInt(actualCount)).to.equal(expectedCount);
});

Then('my health should be {int}', async function (expectedHealth) {
  const healthElement = await this.driver.findElement(By.css('.health .val'));
  const actualHealth = await healthElement.getText();
  expect(parseInt(actualHealth)).to.equal(expectedHealth);
});

Then('my money should be {int}', async function (expectedMoney) {
  const moneyElement = await this.driver.findElement(By.css('.money .val'));
  const actualMoney = await moneyElement.getText();
  expect(parseInt(actualMoney)).to.equal(expectedMoney);
});
