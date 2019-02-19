import {browser, by, protractor} from 'protractor';
import {Actions} from '../support/Actions'

const actions = new Actions();

export class Checkout {

    public guestCheckoutRadioButton = browser.element(by.cssContainingText('label', 'Guest Checkout'));

    public firstNameBillingDetails = browser.element(by.id('input-payment-firstname'));
    public lastNameBillingDetails = browser.element(by.id('input-payment-lastname'));
    public emailBillingDetails = browser.element(by.id('input-payment-email'));
    public telephoneBillingDetails = browser.element(by.id('input-payment-telephone'));
    public companyBillingDetails = browser.element(by.id('input-payment-company'));
    public addresss1BillingDetails = browser.element(by.id('input-payment-address-1'));
    public cityBillingDetails = browser.element(by.id('input-payment-city'));
    public postcodeBillingDetails = browser.element(by.id('input-payment-postcode'));
    public stateBillingDetails = browser.element(by.id('input-payment-zone'));

    public deliveryDetailsCard = browser.element(by.xpath('//*[@id="accordion"]/div[3]/div[1]/h4/a'));

    public firstNameDeliveryDetails = browser.element(by.id('input-shipping-firstname'));
    public lastNameDeliveryDetails = browser.element(by.id('input-shipping-lastname'));
    public companyDeliveryDetails = browser.element(by.id('input-shipping-company'));
    public addresss1DeliveryDetails = browser.element(by.id('input-shipping-address-1'));
    public cityDeliveryDetails = browser.element(by.id('input-shipping-city'));
    public postcodeDeliveryDetails = browser.element(by.id('input-shipping-postcode'));
    public stateDeliveryDetails = browser.element(by.id('input-shipping-zone'));
    public countryDeliveryDetails = browser.element(by.id('input-shipping-country'));

    public continueButtonInCheckoutOptions = browser.element(by.id('button-account'));
    public continueButtonInBillingDetails = browser.element(by.id('button-guest'));
    public continueButtonInDeliveryDetails = browser.element(by.id('button-guest-shipping'));
    public continueButtonInDeliveryMethod = browser.element(by.id('button-shipping-method'));
    public continueButtonInPaymentMethod = browser.element(by.id('button-payment-method'));
    public confirmOrderButton = browser.element(by.id('button-confirm'));

    public agreeTermsRadioButton = browser.element(by.name('agree'));

    public tableSummary = browser.element(by.xpath('//*[@class="table table-bordered table-hover"]/tbody/tr'));
    public summaryProductName = this.tableSummary.all(by.className('text-left')).get(0);
    public summaryModel = this.tableSummary.all(by.className('text-left')).get(1);
    public summaryQuantity = this.tableSummary.all(by.className('text-right')).get(0);
    public summaryUnitPrice = this.tableSummary.all(by.className('text-right')).get(1);
    public summaryTotalPrice = this.tableSummary.all(by.className('text-right')).get(2);
    public flatShippingRate = browser.element(by.xpath('//*[@class="table table-bordered table-hover"]/tfoot/tr[2]/td[2]'));
    public totalPrice = browser.element(by.xpath('//*[@class="table table-bordered table-hover"]/tfoot/tr[3]/td[2]'));

    public until = protractor.ExpectedConditions;

    public clickOnGuestCheckout() {
        return browser.wait(this.until.elementToBeClickable(this.guestCheckoutRadioButton), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.guestCheckoutRadioButton.click());
    }

    public fillInPersonalInformation(firstName: string, lastName: string, email: string, telephone: string, company: string,
                                     address: string, city: string, postCode: string) {
        return browser.wait(this.until.visibilityOf(this.firstNameBillingDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => browser.sleep(1500))
            .then(() => actions.sendKeys(this.firstNameBillingDetails, firstName)
                .then(() => actions.sendKeys(this.lastNameBillingDetails, lastName))
                .then(() => actions.sendKeys(this.emailBillingDetails, email))
                .then(() => actions.sendKeys(this.telephoneBillingDetails, telephone))
                .then(() => actions.sendKeys(this.companyBillingDetails, company))
                .then(() => actions.sendKeys(this.addresss1BillingDetails, address))
                .then(() => actions.sendKeys(this.cityBillingDetails, city))
                .then(() => actions.sendKeys(this.postcodeBillingDetails, postCode))
            );
    }

    public selectState(state: string) {
        return this.stateBillingDetails.click()
            .then(() => this.stateBillingDetails.all(by.xpath(`//option[text()="${state}"]`)).first().click());
    }

    public clickOnContinueButtonInCheckoutOptions() {
        return browser.wait(this.until.elementToBeClickable(this.continueButtonInCheckoutOptions), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.continueButtonInCheckoutOptions.click());
    }

    public clickOnContinueButtonInBillingDetails() {
        return browser.wait(this.until.elementToBeClickable(this.continueButtonInBillingDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.continueButtonInBillingDetails.click());
    }

    public clickContinueButtonInDeliveryMethod() {
        return browser.wait(this.until.elementToBeClickable(this.continueButtonInDeliveryMethod), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.continueButtonInDeliveryMethod.click());
    }

    public clickContinueButtonInDeliveryDetails() {
        return browser.wait(this.until.elementToBeClickable(this.continueButtonInDeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.continueButtonInDeliveryDetails.click());
    }

    public selectAgreeTermsAndConditionsRadioButton() {
        return browser.wait(this.until.elementToBeClickable(this.agreeTermsRadioButton), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.agreeTermsRadioButton.click());
    }

    public clickContinueButtonInPaymentMethod() {
        return browser.wait(this.until.elementToBeClickable(this.continueButtonInPaymentMethod), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.continueButtonInPaymentMethod.click());
    }

    public clickOnConfirmOrderButton() {
        return browser.wait(this.until.elementToBeClickable(this.confirmOrderButton), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.confirmOrderButton.click());
    }

    public getSummaryProductName() {
        return browser.wait(this.until.visibilityOf(this.summaryProductName), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryProductName.getText());
    }

    public getSummaryModelName() {
        return browser.wait(this.until.visibilityOf(this.summaryModel), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryModel.getText());
    }

    public getSummaryQuantity() {
        return browser.wait(this.until.visibilityOf(this.summaryQuantity), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryQuantity.getText());
    }

    public getSummaryUnitPrice() {
        return browser.wait(this.until.visibilityOf(this.summaryUnitPrice), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryUnitPrice.getText());
    }

    public getSummaryTotalPrice() {
        return browser.wait(this.until.visibilityOf(this.summaryTotalPrice), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryTotalPrice.getText());
    }

    public getFlatShippingRate() {
        return browser.wait(this.until.visibilityOf(this.flatShippingRate), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.flatShippingRate.getText());
    }

    public getTotalPrice() {
        return browser.wait(this.until.visibilityOf(this.totalPrice), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.totalPrice.getText());
    }

    public clickOnDeliverDetailsCard() {
        return browser.wait(this.until.visibilityOf(this.deliveryDetailsCard), 5000, 'Element taking too long to appear in the DOM')
            .then(() => browser.sleep(1500))
            .then(() => this.deliveryDetailsCard.click());
    }

    public getDeliveryDetailsFirstName() {
        return browser.wait(this.until.visibilityOf(this.firstNameDeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.firstNameDeliveryDetails.getAttribute('value'));
    }

    public getDeliveryDetailsLastName() {
        return browser.wait(this.until.visibilityOf(this.lastNameDeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.lastNameDeliveryDetails.getAttribute('value'));
    }

    public getDeliveryDetailsComapny() {
        return browser.wait(this.until.visibilityOf(this.companyDeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.companyDeliveryDetails.getAttribute('value'));
    }

    public getDeliveryDetailsAddress() {
        return browser.wait(this.until.visibilityOf(this.addresss1DeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.addresss1DeliveryDetails.getAttribute('value'));
    }

    public getDeliveryDetailsCity() {
        return browser.wait(this.until.visibilityOf(this.cityDeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.cityDeliveryDetails.getAttribute('value'));
    }

    public getDeliveryDetailsPostCode() {
        return browser.wait(this.until.visibilityOf(this.postcodeDeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.postcodeDeliveryDetails.getAttribute('value'));
    }

    public getDeliverDetailsSelectedState() {
        return browser.wait(this.until.visibilityOf(this.stateDeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.stateDeliveryDetails.element(by.css('option:checked')).getText());
    }

    public getDeliverDetailsSelectedCountry() {
        return browser.wait(this.until.visibilityOf(this.countryDeliveryDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.countryDeliveryDetails.element(by.css('option:checked')).getText());
    }

}