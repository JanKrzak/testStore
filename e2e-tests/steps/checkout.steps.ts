import {Given, Then} from 'cucumber'
import {Home} from '../components/Home'
import {Actions} from '../support/Actions'
import {Cart} from '../components/Cart';
import {Checkout} from '../components/Checkout';

const home = new Home();
const actions = new Actions();
const cart = new Cart();
const checkout = new Checkout();
const chai = require('chai');
const expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given(/^User checkout as a Guest$/, function () {
    return checkout.clickOnGuestCheckout();
});

Given(/^User click on continue account button$/, function () {
    return checkout.clickOnContinueButtonInCheckoutOptions();
});

Given(/^User fill in personal information: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/,
    function (firstName, lastName, email, telephone, companny, address, city, postCode, state) {
        return checkout.fillInPersonalInformation(firstName, lastName, email, telephone, companny, address, city, postCode)
            .then(() => checkout.selectState(state))
    });

Given(/^User click on continue button/, function () {
    return checkout.clickOnContinueButtonInBillingDetails();
});

Given(/^User accept shipping method/, function () {
    return checkout.clickContinueButtonInDeliveryMethod()
});

Given(/^User select agree terms and conditions$/, function () {
    return checkout.selectAgreeTermsAndConditionsRadioButton();
});

Given(/^User click on continue payment button$/, function () {
    return checkout.clickContinueButtonInPaymentMethod();
});

Given(/^User confirm order$/, function () {
    return checkout.clickOnConfirmOrderButton();
});

Then(/^Order summary contains the correct products and price$/, function () {
    return checkout.getSummaryProductName()
        .then((productName) => expect(productName).to.equal('Test product 2'))
});
