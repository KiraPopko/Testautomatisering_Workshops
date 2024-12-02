import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, headless } from '../../config.js';
import edge from 'selenium-webdriver/edge.js';
const options = new edge.Options();
//headless && options.addArguments('--headless=new');
export const driver = new seleniumWebdriver
  .Builder()
  .setEdgeOptions(options)
  .forBrowser("MicrosoftEdge")
  .build();
class CustomWorld {
  constructor() {
    this.driver = driver;
  }
}
setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);