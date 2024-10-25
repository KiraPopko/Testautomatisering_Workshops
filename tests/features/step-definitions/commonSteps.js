import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

const url = "http://localhost:3000"; // Change to your actual URL

// Function to open the cafe
export const openCafe = async (driver) => {
  await driver.get(url);
};

// Function to click a button by its text
export const clickButton = async (driver, buttonText) => {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
};

// Function to check the player's health
export const checkHealth = async (driver, expectedHealth) => {
  const healthElement = await driver.findElement(By.css('.health .val'));
  const actualHealth = await healthElement.getText();
  expect(parseInt(actualHealth)).to.equal(expectedHealth);
};

// Function to check the player's money
export const checkMoney = async (driver, expectedMoney) => {
  const moneyElement = await driver.findElement(By.css('.money .val'));
  const actualMoney = await moneyElement.getText();
  expect(parseInt(actualMoney)).to.equal(expectedMoney);
};

// Given step: Open cafe
Given('that I am outside the cafe', async function () {
  await openCafe(this.driver);
});

// Given step: Set initial health
Given('my initial health is {int}', async function (initialHealth) {
  this.initialHealth = initialHealth; // Save initial health for later use
});

// Then step: Verify health value
Then('my health should be {int}', async function (expectedHealth) {
  const healthElement = await this.driver.findElement(By.css('.health .val'));
  const actualHealth = parseInt(await healthElement.getText());

  // Debug log to see what the health values are
  console.log(`Expected Health: ${expectedHealth}, Actual Health: ${actualHealth}`);

  expect(actualHealth).to.equal(expectedHealth);
});


// Then step: Verify money value
Then('my money should be {int}', async function (expectedMoney) {
  await checkMoney(this.driver, expectedMoney);
});

// When step: Wait without taking action
When('I wait without taking action', async function () {
  await this.driver.sleep(2000); // Adjust wait time as needed
});
