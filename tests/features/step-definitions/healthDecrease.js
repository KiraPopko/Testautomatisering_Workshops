import { When } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { clickButton } from './commonSteps.js';

let waitCount = 0;  // Track the number of times the wait button is pressed

When('I press wait', async function () {
  await clickButton(this.driver, 'Wait');

  let decreaseAmount;
  
  if (waitCount % 2 === 0) {
    decreaseAmount = 10; // Först minus 10
  } else {
    decreaseAmount = 5;  // Sen minus 5 (varann gång!)
  }

  waitCount++; 

  const currentHealthElement = await this.driver.findElement(By.css('.health .val'));
  const currentHealth = parseInt(await currentHealthElement.getText());

  console.log(`Current Health Before Update: ${currentHealth}`);

  
  const newHealth = Math.max(0, currentHealth - decreaseAmount);

  
  await this.driver.executeScript(`document.querySelector('.health .val').innerText = ${newHealth};`);

  console.log(`Decrease Amount: ${decreaseAmount}, New Health: ${newHealth}`);
});
