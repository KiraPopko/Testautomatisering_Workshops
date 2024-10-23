# espresso-addict
 A small text adventure - written in vanilla JS


 
Scenario: Checking button Enter the caffe
Given that game is starded with joining game "http://localhost:3000"
When button "Enter the caffe"
Then should be available, picture, text and button buy an espresso

Scenario: Checking button Wait
Given that game is starded with joining game "http://localhost:3000"
When button "Wait" is pressed,
Then "Health" should be changed to "40"



