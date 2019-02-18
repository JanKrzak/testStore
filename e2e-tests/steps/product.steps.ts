import {Then, When} from 'cucumber'
import {Home} from '../components/Home'
import {Actions} from '../support/Actions'
import {Product} from '../components/Product';

const home = new Home();
const actions = new Actions();
const product = new Product();
const chai = require('chai');
const expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^User click on cart$/, function () {
    return product.clickOnCartDetails();
});
