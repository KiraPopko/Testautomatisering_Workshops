import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

Given('I am starting the game outside the cafe', async function () {
  await this.driver.get('http://localhost:3000');
});

When('I click the {string} menu option', async function (menuOption) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${menuOption.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
});

Then('I should see the cafe image displayed', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});

Then('I should see a descriptive text', async function () {
  const descriptionElement = await this.driver.findElement(By.css('p.description'));
  const textContent = await descriptionElement.getText();
  expect(textContent).to.be.a('string').and.not.empty;
});

Then('I should see a help message displayed', async function () {
  const helpTextElement = await this.driver.findElement(By.css('p.description'));
  const textContent = await helpTextElement.getText();
  expect(textContent).to.include("You're a hipster");
});


Then('I should see a button labeled {string}', async function (buttonLabel) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonLabel.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const isDisplayed = await button.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should be outside the cafe', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});
