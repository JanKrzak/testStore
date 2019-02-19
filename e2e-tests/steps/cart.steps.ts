import {When} from 'cucumber'
import {Cart} from '../components/Cart';

const cart = new Cart();
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^User proceed to checkout with added products/, function () {
    return cart.clickOnCheckoutButton();
});