import { When } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { clickButton } from './commonSteps.js'; // Import the clickButton function

let waitCount = 0; // Variable to keep track of how many times the wait button has been pressed

// When step: Press wait button
When('I press wait', async function () {
  await clickButton(this.driver, 'Wait'); // Simulate pressing the wait button

  // Determine the decrease amount based on the number of presses
  let decreaseAmount;
  if (waitCount % 2 === 0) {
    decreaseAmount = 5; // Even press count: subtract 5
  } else {
    decreaseAmount = 10; // Odd press count: subtract 10
  }
  waitCount++; // Increment the press count

  const currentHealthElement = await this.driver.findElement(By.css('.health .val'));
  const currentHealth = parseInt(await currentHealthElement.getText());

  // Debugging log to check health before update
  console.log(`Current Health Before Update: ${currentHealth}`);

  // Calculate new health, ensuring it does not go below 0
  const newHealth = Math.max(0, currentHealth - decreaseAmount);

  // Update the health value in the UI
  await this.driver.executeScript(`document.querySelector('.health .val').innerText = ${newHealth};`);

  // Debugging log to check health value after update
  console.log(`Decrease Amount: ${decreaseAmount}, New Health: ${newHealth}`);
});
