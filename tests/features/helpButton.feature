Feature: Help Button

  Scenario: Start outside the cafe and see the cafe image
    Given I am starting the game outside the cafe
    When I select "Wait" from the action menu
    Then I should see the cafe image displayed
    And I should see a descriptive text

  Scenario: Viewing the help guide
    Given I am starting the game outside the cafe
    When I click the "Help" menu option
    Then I should see a help message displayed
    And I should see a button labeled "Continue"

  Scenario: Navigating back after viewing help
    Given I am starting the game outside the cafe
    And I click the "Help" menu option
    When I click the "Continue" menu option
    Then I should be outside the cafe