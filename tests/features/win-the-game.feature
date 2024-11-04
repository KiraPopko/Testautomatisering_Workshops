Feature: As a player I win the game when I get 5 espressos

Scenario: I should be given a beer by the bartender that I can exchange for an espresso
  Given that I have started the game by navigating to "http://localhost:3000"
  And that I navigated to the position "in a crowded bar"
  And that my position is "in a crowded bar"
  When I wait long enough for the description to contain the text "The bartender offers you a can of beer"
  Then my hipster bag should contain "a can of beer"

  


