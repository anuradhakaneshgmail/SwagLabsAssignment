Feature: Swag Labs Login

  Scenario Outline: As a user, I cannot log into the swag labs app with invalid username/password
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see error <message> on login page
    Examples:
      | username      | password | message               |
      |               |          |  Username is required |
      | standard_user |          |  Password is required |
      | 1@2.com       | f-o-o    |  Username and password do not match any user in this service.|


  Scenario Outline: As a user, I can log into the swag labs app
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see cart on homepage
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |