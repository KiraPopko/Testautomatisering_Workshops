import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, headless, browser } from '../../config.js';
import edge from 'selenium-webdriver/edge.js';
import chrome from 'selenium-webdriver/chrome.js';

let _driver;

const GITHUB_ACTIONS = process.env['GITHUB_ACTIONS'] === 'true';
if (!GITHUB_ACTIONS) { //local run edge
  const options = new edge.Options();
  //headless && options.addArguments('--headless=new');
  _driver = new seleniumWebdriver
    .Builder()
    .setEdgeOptions(options)
    .forBrowser("MicrosoftEdge")
    .build();
}
else { //github action run chrome
  const options = new chrome.Options();
  options.addArguments('--headless=new');
  _driver = new seleniumWebdriver
    .Builder()
    .setChromeOptions(options)
    .forBrowser("Chrome")
    .build();
}

export const driver = _driver;

class CustomWorld {
  constructor() {
    this.driver = driver;
  }
}


setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
