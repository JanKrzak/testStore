import {Then, When} from 'cucumber'
import {Checkout} from '../components/Checkout';

const checkout = new Checkout();
const chai = require('chai');
const expect = chai.expect;
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^User continue as a Guest$/, function () {
    return checkout.clickOnGuestCheckout()
        .then(() => checkout.clickOnContinueButtonInCheckoutOptions());
});

When(/^User fill in personal information: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/,
    function (firstName, lastName, email, telephone, companny, address, city, postCode, state) {
        return checkout.fillInPersonalInformation(firstName, lastName, email, telephone, companny, address, city, postCode)
            .then(() => checkout.selectState(state))
            .then(() => checkout.clickOnContinueButtonInBillingDetails());
});

When(/^User click on continue button/, function () {
    return checkout.clickOnContinueButtonInBillingDetails();
});

When(/^User accept shipping method/, function () {
    return checkout.clickContinueButtonInDeliveryMethod();
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
        .then((productName) => expect(productName).to.equal('Test product 2'));
});

Then(/^Order summary contains the correct model name/, function () {
    return checkout.getSummaryModelName()
        .then((modelName) => expect(modelName).to.equal('Product 2'));
});

Then(/^Order summary contains the correct quantity/, function () {
    return checkout.getSummaryQuantity()
        .then((quantity) => expect(quantity).to.equal('5'));
});

Then(/^Order summary contains the correct unit price/, function () {
    return checkout.getSummaryUnitPrice()
        .then((unitPrice) => expect(unitPrice).to.equal('$80.00'));
});

Then(/^Order summary contains the correct total price/, function () {
    return checkout.getSummaryTotalPrice()
        .then((totalPrice) => expect(totalPrice).to.equal('$400.00'));
});

Then(/^Order contains the correct flat shipping rate/, function () {
    return checkout.getFlatShippingRate()
        .then((flatShippingRate) => expect(flatShippingRate).to.equal('$5.00'));
});

Then(/^Order contains the correct total price with shipping rate/, function () {
    return checkout.getTotalPrice()
        .then((totalPrice) => expect(totalPrice).to.equal('$405.00'));
});

When(/^User navigate to delivery details card$/, function () {
    return checkout.clickOnDeliverDetailsCard();
});

Then(/^Deliver details first name is "([^"]*)"$/, function (firstName) {
    return checkout.getDeliveryDetailsFirstName()
        .then((getFirstName) => expect(getFirstName).to.equal(firstName));
});

Then(/^Deliver details last name is "([^"]*)"$/, function (lastName) {
    return checkout.getDeliveryDetailsLastName()
        .then((getLastName) => expect(getLastName).to.equal(lastName));
});

Then(/^Deliver details company is "([^"]*)"$/, function (company) {
    return checkout.getDeliveryDetailsComapny()
        .then((getCompany) => expect(getCompany).to.equal(company));
});

Then(/^Deliver details address is "([^"]*)"$/, function (address) {
    return checkout.getDeliveryDetailsAddress()
        .then((getAddress) => expect(getAddress).to.equal(address));
});

Then(/^Deliver details city is "([^"]*)"$/, function (city) {
    return checkout.getDeliveryDetailsCity()
        .then((getCity) => expect(getCity).to.equal(city));
});

Then(/^Deliver details post code is "([^"]*)"$/, function (postCode) {
    return checkout.getDeliveryDetailsPostCode()
        .then((getPostCode) => expect(getPostCode).to.equal(postCode));
});

Then(/^Deliver details state is "([^"]*)"$/, function (state) {
    return checkout.getDeliverDetailsSelectedState()
        .then((getState) => expect(getState).to.equal(state));
});

Then(/^Deliver details country is "([^"]*)"$/, function (country) {
    return checkout.getDeliverDetailsSelectedCountry()
        .then((getCountry) => expect(getCountry).to.equal(country));
});

When(/^User continue to delivery method$/, function () {
    return checkout.clickContinueButtonInDeliveryDetails();
});