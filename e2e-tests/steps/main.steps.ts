import {Given, When} from 'cucumber'
import {Home} from '../components/Home'
import {Actions} from '../support/Actions'
import {browser} from 'protractor';
import {Cart} from '../components/Cart';

const home = new Home();
const actions = new Actions();
const cart = new Cart();
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given(/^User navigate to home page$/, function() {
    return home.navigateTo();
});

Given (/^User click on "([^"]*)"$/, function (productName) {
    return home.clickOnProductByName(productName);
});

When ('Stop', function () {
    return browser.sleep(50000);
});

Given (/^User click on view cart$/, function () {
   return cart.clickOnViewCart();
});