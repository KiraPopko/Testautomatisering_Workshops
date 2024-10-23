import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

Given('I am starting the game outside the cafe', async function () {
  await this.driver.get('http://localhost:3000');
});

When('I select {string} from the action menu', async function (option) {
  const actionOption = await this.driver.findElement(By.xpath(`//li[contains(text(), '${option}')]`));
  await actionOption.click();
});

When('I click the {string} menu option', async function (option) {
  const menuOption = await this.driver.findElement(By.xpath(`//li[contains(text(), '${option}')]`));
  await menuOption.click();
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
  const helpMessageElement = await this.driver.findElement(By.css('p.description'));
  const isDisplayed = await helpMessageElement.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should see a button labeled "Continue"', async function () {
  const continueButton = await this.driver.findElement(By.xpath("//li[contains(text(), 'Continue')]"));
  const isDisplayed = await continueButton.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should be outside the cafe', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});
