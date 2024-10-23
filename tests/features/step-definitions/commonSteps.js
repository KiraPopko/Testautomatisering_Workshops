import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

// Gemensamma stegdefinitioner
Given('that I am outside the cafe', async function () {
  await this.driver.get("http://localhost:3000");
});

When('I click the {string} button', async function (buttonText) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
});

When('I wait without taking action', async function () {
  // Simulerar att användaren inte gör något
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
