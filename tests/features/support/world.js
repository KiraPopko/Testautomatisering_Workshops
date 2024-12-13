// import seleniumWebdriver from 'selenium-webdriver';
// import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
// import { timeout, headless } from '../../config.js';
// import edge from 'selenium-webdriver/edge.js';
// const options = new edge.Options();
// //headless && options.addArguments('--headless=new');
// export const driver = new seleniumWebdriver
//   .Builder()
//   .setEdgeOptions(options)
//   .forBrowser("MicrosoftEdge")
//   .build();
// class CustomWorld {
//   constructor() {
//     this.driver = driver;
//   }
// }
// setDefaultTimeout(timeout);
// setWorldConstructor(CustomWorld);

import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

const GITHUB_ACTIONS = process.env['GITHUB_ACTIONS'] === 'true';

const options = new chrome.Options();
// Run headless if config says so or if we are running in GitHub actions 
(headless || GITHUB_ACTIONS) && options.addArguments('--headless=new');


class CustomWorld {
  constructor() {
    this.driver = new seleniumWebdriver
      .Builder()
      .setChromeOptions(options)
      .forBrowser(browser)
      .build();
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);