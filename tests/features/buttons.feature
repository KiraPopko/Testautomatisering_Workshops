Feature: All play  Buttons should be present and work correctly after clicking them

Scenario: Checking that all buttons are visible
Given that game is starded with joining game "http://localhost:3000"
Then that there are available all buttons "Enter the cafe", "Wait", "Go north", "Go south", "Help"

