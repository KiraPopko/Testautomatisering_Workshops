
import { Given, When, Then, world } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded} from './helpers.js'
//import world from './support/world.js'



Then('click repeatedly button {string}', async function (button) {
  // continue to wait until we die
  /*while (await getWhereIAm(this) !== 'I won') {
    let menuChoiceElement = await getMenuChoiceElement(this, button);
    await menuChoiceElement.click();
  }*/
    let menuChoiceElement = await getMenuChoiceElement(this, button);
    await menuChoiceElement.click();
    await menuChoiceElement.click();
});


Then('money decreses till {float}', async function(expectedMoney){
  const moneyElement = await this.get('.money .val');
  
  // Get the text content of the element
  const moneyText = await moneyElement.textContent();

  // Parse the text content to a float
  const moneyN = parseFloat(moneyText);

  // Now check that the parsed value matches the expected value
  expect(moneyN).to.equal(expectedMoney);
  console.log(moneyN, expectedMoney)
  
});

