Feature: All Stateboard parameters should be updated correctly

Background: We have started a game
Given that game is starded with joining game "http://localhost:3000"
When game is joined Health - 50, Money-10, Espresso-0


Scenario: Health sould be changed when pressing Wait button

Then every time pressing wait button Health decrease


Scenario: Health is 0, game is over

When press wait button press 7 times
Then health changes to 0
And view changes and only play again button is available

Scenario: Update Espressos and Money state

Then press to Enter the cafe
And press Bay an espresso 
And Espressos state shoud be changed to 1 modey decreased to 5
And press Bay an espresso one more time
And Espressos state shoud be changed to 2 modey decreased to 0


