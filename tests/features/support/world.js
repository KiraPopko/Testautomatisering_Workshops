import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, headless, browser } from '../../config.js';
import edge from 'selenium-webdriver/edge.js';
import chrome from 'selenium-webdriver/chrome.js';

const options = new chrome.Options();
//headless && options.addArguments('--headless=new');
export const driver = new seleniumWebdriver
  .Builder()
  .setEdgeOptions(options)
  .forBrowser(browser)
  .build();
class CustomWorld {
  constructor() {
    this.driver = driver;
  }
}
setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
