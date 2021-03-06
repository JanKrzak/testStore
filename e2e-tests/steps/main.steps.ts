import {Given, When} from 'cucumber'
import {Home} from '../components/Home'
import {Cart} from '../components/Cart';
import {Product} from '../components/Product';

const home = new Home();
const cart = new Cart();
const product = new Product();
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given(/^User has "([^"]*)" quantity of "([^"]*)" in cart$/, function (quantity, productName) {
    return home.navigateTo()
        .then(() => home.clickOnProductByName(productName))
        .then(() => product.setQuantityOfProduct(quantity))
        .then(() => product.addProductToCart());
});

When(/^User click on "([^"]*)"$/, function (productName) {
    return home.clickOnProductByName(productName);
});

When(/^User click on view cart$/, function () {
    return cart.clickOnViewCart();
});