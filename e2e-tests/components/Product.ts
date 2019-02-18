import {browser, $, element, by, protractor} from 'protractor';

export class Product {

    public quantityField = browser.element(by.id('input-quantity'));
    public addToCartButton = browser.element(by.id('button-cart'));
    public cartButton = browser.element(by.id('cart-total'));

    public until = protractor.ExpectedConditions;

    public setQuantityOfProduct(quantity: number)    {
        return this.quantityField.clear()
            .then(() => this.quantityField.sendKeys(quantity))
    }

    public addProductToCart()   {
        return browser.wait(this.until.elementToBeClickable(this.addToCartButton), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.addToCartButton.click())
    }

    public clickOnCartDetails() {
        return browser.wait(this.until.presenceOf(this.cartButton), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.cartButton.click())
    }

}