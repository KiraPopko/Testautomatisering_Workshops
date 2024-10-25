import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

const url = "http://localhost:3000";

export const openCafe = async function (driver) {
  await driver.get(url);
};

export const clickButton = async function (driver, buttonText) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
};

export const checkHealth = async function (driver, expectedHealth) {
  const healthElement = await driver.findElement(By.css('.health .val'));
  const actualHealth = await healthElement.getText();
  expect(parseInt(actualHealth)).to.equal(expectedHealth);
};

export const checkMoney = async function (driver, expectedMoney) {
  const moneyElement = await driver.findElement(By.css('.money .val'));
  const actualMoney = await moneyElement.getText();
  expect(parseInt(actualMoney)).to.equal(expectedMoney);
};

Given('that I am outside the cafe', async function () {
  await openCafe(this.driver);
});

When('I wait without taking action', async function () {
  await this.driver.sleep(2000)
});

Then('my health should be {int}', async function (expectedHealth) {
  await checkHealth(this.driver, expectedHealth);
});

Then('my money should be {int}', async function (expectedMoney) {
  await checkMoney(this.driver, expectedMoney);
});
