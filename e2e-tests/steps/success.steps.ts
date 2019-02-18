import {Given, Then, When} from 'cucumber'
import {Home} from '../components/Home'
import {Actions} from '../support/Actions'
import {Cart} from '../components/Cart';
import {Checkout} from '../components/Checkout';
import {Success} from '../components/Succes';

const home = new Home();
const actions = new Actions();
const cart = new Cart();
const checkout = new Checkout();
const success = new Success();
const chai = require('chai');
const expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Then(/^User is redirected to new page and can see success message$/, function () {
    return success.getHeaderName()
        .then((headerName) => expect(headerName).to.equal('Your order has been placed!'))
});