Feature: Explore the Cafe

  Scenario: Start outside the cafe and see the cafe image
    Given that I am outside the cafe
    When I do nothing
    Then I should see an image of the cafe
    And I should see a descriptive text explaining the scenario

  Scenario: Enter the cafe and view the inside image
    Given that I am outside the cafe
    When I click the "Enter the cafe" button
    Then I should see an image displayed inside the cafe
    And I should see a descriptive text explaining the scenario
