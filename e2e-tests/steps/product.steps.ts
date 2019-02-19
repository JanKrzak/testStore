import {When} from 'cucumber'
import {Product} from '../components/Product';


const product = new Product();
const chai = require('chai');
const expect = chai.expect;
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^User click on cart$/, function () {
    return product.clickOnCartDetails();
});
