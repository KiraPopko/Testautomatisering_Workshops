# espresso-addict
 A small text adventure - written in vanilla JS


 


/*Then('{string} should be changed to {int} and color to {string}', async function (a, b, c) {

    
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



      //check the clolor
      const healthElementClass = await currentHealthElement.getAttribute('.healh')
      // Assuming "bad" is the class that applies the red color when health decreases significantly
      expect(healthElementClass).to.include('bad'); */
       
      Then('{string} should be changed to {int}', async function (a, b) {
        // and color to {string}
        let waitCount;
        let decreaseAmount;
        
        if (waitCount) {
            decreaseAmount = 10; // First decrease by 10
        } else {
            decreaseAmount = 5;  // Then decrease by 5 (alternating)
        }
    // element should be decreased
        waitCount++; 
    
        const currentHealthElement = await this.driver.findElement(By.css('.health .val'));
        const currentHealth = parseInt(await currentHealthElement.getText());
    
        console.log(`Current Health Before Update: ${currentHealth}`);
    
        const newHealth = Math.max(0, currentHealth - decreaseAmount);
    
        await this.driver.executeScript(`document.querySelector('.health .val').innerText = ${newHealth};`);
    
        console.log(`Decrease Amount: ${decreaseAmount}, New Health: ${newHealth}`);
        expect(newHealth).to.equal(b);
    
        // Check the color/class after health update
        /*const healthElementClass = await currentHealthElement.getAttribute('class'); // Corrected: `class`
        
        // Check if the element contains the expected color class
        if (c === "red") {
            expect(healthElementClass).to.include('bad'); // Assumes 'bad' class applies the red color
        }
    
        // Optionally, you can also assert the updated health value*/
        const healthElementClass = await currentHealthElement.getAttribute('.class .val'); 

    // Verify that the class reflects the health status
    expect(healthElementClass).to.include('bad');
      });

        /*Then('{string} should be changed to {int} and color to {string}', async function (elementName, expectedHealth, expectedColor) {
          const decreaseAmount = 10;
          const currentHealthElement = await this.driver.findElement(By.css('.health .val'));
          const currentHealth = parseInt(await currentHealthElement.getText());
      
          console.log(`Current Health Before Update: ${currentHealth}`);
          const newHealth = Math.max(0, currentHealth - decreaseAmount);
          await this.driver.executeScript(`document.querySelector('.health .val').innerText = ${newHealth};`);
      
          console.log(`New Health: ${newHealth}`);
      
          if (newHealth < 50 && expectedColor === "red") { 
              await this.driver.executeScript(`document.querySelector('.health .val').classList.add('bad');`);
          }
      
          const healthElementClass = await currentHealthElement.getAttribute('class');
          expect(newHealth).to.equal(expectedHealth);
      
          if (expectedColor === "red") {
              expect(healthElementClass).to.include('bad');
          }
      });
      
    });*/
    



