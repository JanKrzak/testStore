Feature: Order products

  As a user
  I want to buy product as a guest

  Scenario Outline: User order one product as a guest
    Given User has "5" quantity of "Test product 2" in cart
    When User click on cart
    When User click on view cart
    When User proceed to checkout with added products
    When User continue as a Guest
    When User fill in personal information: "<First Name>", "<Last Name>", "<Email>", "<Telephone>", "<Company>", "<Address>", "<City>", "<Post Code>", "<State>"
    When User accept shipping method
    When User select agree terms and conditions
    When User click on continue payment button
    Then Order summary contains the correct products name
    Then Order summary contains the correct model name
    Then Order summary contains the correct quantity
    Then Order summary contains the correct unit price
    Then Order summary contains the correct total price
    Then Order contains the correct flat shipping rate
    Then Order contains the correct total price with shipping rate
    When User confirm order
    Then User is redirected to success page and can see success message

    Examples:
      | First Name | Last Name | Email              | Telephone    | Company    | Address       | City    | Post Code | State        |
      | Jan        | Kowalski  | jan.kowalski@wp.pl | +48664569236 | Technology | Nowy Swiat 26 | Wroclaw | 50-537    | Dolnoslaskie |