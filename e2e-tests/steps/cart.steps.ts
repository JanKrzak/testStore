import {When} from 'cucumber'
import {Home} from '../components/Home'
import {Actions} from '../support/Actions'
import {Cart} from '../components/Cart';

const home = new Home();
const actions = new Actions();
const cart = new Cart();
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^User proceed to checkout with added products/, function () {
    return cart.clickOnCheckoutButton();
});