import {browser, by, protractor} from 'protractor';
import {Actions} from '../support/Actions'

const actions = new Actions();

export class Checkout {

    public guestCheckoutRadioButton = browser.element(by.xpath('//*[@id="collapse-checkout-option"]/div/div/div[1]/div[2]/label'));

    public firstNamePersonalDetails = browser.element(by.name('firstname'));
    public lastNamePersonalDetails = browser.element(by.name('lastname'));
    public emailPersonalDetails = browser.element(by.id('input-payment-email'));
    public telephonePersonalDetails = browser.element(by.name('telephone'));
    public companyPersonalDetails = browser.element(by.name('company'));
    public addresss1PersonalDetails = browser.element(by.name('address_1'));
    public addresss2PersonalDetails = browser.element(by.name('address_2'));
    public cityPersonalDetails = browser.element(by.name('city'));
    public postcodePersonalDetails = browser.element(by.name('postcode'));
    public statePersonalDetails = browser.element(by.name('zone_id'));

    public continueButtonInCheckoutOptions = browser.element(by.id('button-account'));
    public continueButtonInBillingDetails = browser.element(by.id('button-guest'));
    public continueButtonInDeliveryMethod = browser.element(by.id('button-shipping-method'));
    public continueButtonInPaymentMethod = browser.element(by.id('button-payment-method'));
    public confirmOrderButton = browser.element(by.id('button-confirm'));

    public agreeTermsRadioButton = browser.element(by.name('agree'));

    public until = protractor.ExpectedConditions;

    public tableSummary = browser.element(by.xpath('//*[@class="table table-bordered table-hover"]/tbody/tr'));
    public summaryProductName = this.tableSummary.all(by.className('text-left')).get(0);
    public summaryModel = this.tableSummary.all(by.className('text-left')).get(1);
    public summaryQuantity = this.tableSummary.all(by.className('text-right')).get(0);
    public summaryUnitPrice = this.tableSummary.all(by.className('text-right')).get(1);
    public summaryTotalPrice = this.tableSummary.all(by.className('text-right')).get(2);
    public flatShippingRate = browser.element(by.xpath('//*[@class="table table-bordered table-hover"]/tfoot/tr[2]/td[2]'));
    public totalPrice = browser.element(by.xpath('//*[@class="table table-bordered table-hover"]/tfoot/tr[3]/td[2]'));


    public clickOnGuestCheckout() {
        return browser.wait(this.until.elementToBeClickable(this.guestCheckoutRadioButton), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.guestCheckoutRadioButton.click());
    }

    public fillInPersonalInformation(firstName: string, lastName: string, email: string, telephone: string, company: string,
                                     address: string, city: string, postCode: string) {
        return browser.wait(this.until.visibilityOf(this.firstNamePersonalDetails), 5000, 'Element taking too long to appear in the DOM')
            .then(() => browser.sleep(1500))
            .then(() => actions.sendKeys(this.firstNamePersonalDetails, firstName)
                .then(() => actions.sendKeys(this.lastNamePersonalDetails, lastName))
                .then(() => actions.sendKeys(this.emailPersonalDetails, email))
                .then(() => actions.sendKeys(this.telephonePersonalDetails, telephone))
                .then(() => actions.sendKeys(this.companyPersonalDetails, lastName))
                .then(() => actions.sendKeys(this.addresss1PersonalDetails, address))
                .then(() => actions.sendKeys(this.cityPersonalDetails, city))
                .then(() => actions.sendKeys(this.postcodePersonalDetails, postCode))
            )
    }

    public selectState(state: string) {
        return this.statePersonalDetails.click()
            .then(() => this.statePersonalDetails.all(by.xpath(`//option[text()="${state}"]`)).first().click())
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
            .then(() => this.summaryProductName.getText())
    }

    public getSummaryModelName() {
        return browser.wait(this.until.visibilityOf(this.summaryModel), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryModel.getText())
    }

    public getSummaryQuantity() {
        return browser.wait(this.until.visibilityOf(this.summaryQuantity), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryQuantity.getText())
    }

    public getSummaryUnitPrice() {
        return browser.wait(this.until.visibilityOf(this.summaryUnitPrice), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryUnitPrice.getText())
    }

    public getSummaryTotalPrice() {
        return browser.wait(this.until.visibilityOf(this.summaryTotalPrice), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.summaryTotalPrice.getText())
    }

    public getFlatShippingRate() {
        return browser.wait(this.until.visibilityOf(this.flatShippingRate), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.flatShippingRate.getText())
    }

    public getTotalPrice() {
        return browser.wait(this.until.visibilityOf(this.totalPrice), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.totalPrice.getText())
    }
}