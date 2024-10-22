import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';


Given('that I have started the game at {string}', async function (url) {
  await this.driver.get(url);
});

When('I click the full screen button', async function () {
  let activateFullscreenMode = await this.driver.findElements(
    By.css('[class:"go-fullscreen"]').click()
  );
});

Then(...)