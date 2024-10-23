import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

// Given Steps
Given('I am starting the game outside the cafe', async function () {
  await this.driver.get('http://localhost:3000');
});

Given('I have entered the cafe', async function () {
  await this.driver.get('http://localhost:3000');
  const buttonXpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "enter the cafe")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(buttonXpath)), 10000);
  await button.click();
});

// Action Steps
When('I select {string} from the action menu', async function (action) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${action.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
  await button.click();
});

When('I click the {string} menu option', async function (buttonText) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
  await button.click();
});

// Validation Steps
Then('I should see the cafe image displayed', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  // Adjusted to match the correct image
  expect(srcImage).to.contain('inside-cafe.jpg');
});

Then('I should see a descriptive text', async function () {
  const descriptionElement = await this.driver.findElement(By.css('.description'));
  const descriptionText = await descriptionElement.getText();
  expect(descriptionText).to.be.a('string').and.not.empty;
});

Then('I should see a help message displayed', async function () {
  const helpMessage = await this.driver.findElement(By.css('.description'));
  const isDisplayed = await helpMessage.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should see a button labeled {string}', async function (buttonLabel) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonLabel.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
  const isVisible = await button.isDisplayed();
  expect(isVisible).to.be.true;
});

Then('I should be outside the cafe', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});

Then('I should be back inside the cafe', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('inside-cafe.jpg');
});
