Feature: Order products

  As a user
  I want to buy product as a guest

  Scenario Outline: User order one product as a guest
    Given User navigate to home page
    Given User click on "Test product 2"
    Given User add "5" product to cart
    Given User click on cart details
    Given User click on view cart
    Given User checkout with added products
    Given User checkout as a Guest
    Given User click on continue account button
    Given User fill in personal information: "<First Name>", "<Last Name>", "<Email>", "<Telephone>", "<Company>", "<Address>", "<City>", "<Post Code>", "<State>"
    Given User click on continue button
    Given User accept shipping method
    Given User select agree terms and conditions
    Given User click on continue payment button
    Then Order summary contains the correct products and price
    Given User confirm order
    Then User is redirected to new page and can see success message
    When Stop

    Examples:
    | First Name | Last Name | Email | Telephone | Company | Address | City | Post Code | State |
    | Jan |  Kowalski | jan.kowalski@wp.pl | +48664569236 | Technology | Nowy Swiat 26 | Wroclaw | 50-537 | Dolnoslaskie |