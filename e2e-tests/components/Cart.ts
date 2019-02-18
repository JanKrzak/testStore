import {browser, by, protractor} from 'protractor';

export class Cart {

    public viewCartButton = browser.element(by.xpath('//*[@class="text-right"]/a[1]'));
    public checkoutButton = browser.element(by.xpath('//*[@id="content"]/div[3]/div[2]/a'));

    public until = protractor.ExpectedConditions;

    public clickOnViewCart() {
        return browser.wait(this.until.elementToBeClickable(this.viewCartButton), 7000, 'Element taking too long to appear in the DOM')
            .then(() => this.viewCartButton.click())
    }

    public clickOnCheckoutButton() {
        return browser.wait(this.until.elementToBeClickable(this.checkoutButton), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.checkoutButton.click())
    }
}