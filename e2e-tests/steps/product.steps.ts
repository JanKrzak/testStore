import {Given} from 'cucumber'
import {Home} from '../components/Home'
import {Actions} from '../support/Actions'
import {Product} from '../components/Product';

const home = new Home();
const actions = new Actions();
const product = new Product();
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given (/^User add "([^"]*)" product to cart/, function (quantity) {
    return product.setQuantityOfProduct(quantity)
        .then(() => product.addProductToCart())
});

Given (/^User click on cart details$/, function () {
    return product.clickOnCartDetails();
});