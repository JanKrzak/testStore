import {Then, When} from 'cucumber'
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

When(/^User continue as a Guest$/, function () {
    return checkout.clickOnGuestCheckout()
        .then(() => checkout.clickOnContinueButtonInCheckoutOptions())
});

When(/^User fill in personal information: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/,
    function (firstName, lastName, email, telephone, companny, address, city, postCode, state) {
        return checkout.fillInPersonalInformation(firstName, lastName, email, telephone, companny, address, city, postCode)
            .then(() => checkout.selectState(state))
            .then(() => checkout.clickOnContinueButtonInBillingDetails())
    });

When(/^User click on continue button/, function () {
    return checkout.clickOnContinueButtonInBillingDetails();
});

When(/^User accept shipping method/, function () {
    return checkout.clickContinueButtonInDeliveryMethod()
});

When(/^User select agree terms and conditions$/, function () {
    return checkout.selectAgreeTermsAndConditionsRadioButton();
});

When(/^User click on continue payment button$/, function () {
    return checkout.clickContinueButtonInPaymentMethod();
});

When(/^User confirm order$/, function () {
    return checkout.clickOnConfirmOrderButton();
});

Then(/^Order summary contains the correct products name/, function () {
    return checkout.getSummaryProductName()
        .then((productName) => expect(productName).to.equal('Test product 2'))
});

Then(/^Order summary contains the correct model name/, function () {
    return checkout.getSummaryModelName()
        .then((modelName) => expect(modelName).to.equal('Product 2'))
});

Then(/^Order summary contains the correct quantity/, function () {
    return checkout.getSummaryQuantity()
        .then((quantity) => expect(quantity).to.equal('5'))
});

Then(/^Order summary contains the correct unit price/, function () {
    return checkout.getSummaryUnitPrice()
        .then((unitPrice) => expect(unitPrice).to.equal('$80.00'))
});

Then(/^Order summary contains the correct total price/, function () {
    return checkout.getSummaryTotalPrice()
        .then((totalPrice) => expect(totalPrice).to.equal('$400.00'))
});

Then(/^Order contains the correct flat shipping rate/, function () {
    return checkout.getFlatShippingRate()
        .then((flatShippingRate) => expect(flatShippingRate).to.equal('$5.00'))
});

Then(/^Order contains the correct total price with shipping rate/, function () {
    return checkout.getTotalPrice()
        .then((totalPrice) => expect(totalPrice).to.equal('$405.00'))
});