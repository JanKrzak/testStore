import {Then} from 'cucumber'
import {Success} from '../components/Succes';

const success = new Success();
const chai = require('chai');
const expect = chai.expect;
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Then(/^User is redirected to success page and can see success message$/, function () {
    return success.getHeaderName()
        .then((headerName) => expect(headerName).to.equal('Your order has been placed!'));
});