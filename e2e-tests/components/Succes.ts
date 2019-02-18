import {browser, by, protractor} from 'protractor';

export class Success {

    public headerName = browser.element(by.id('content')).element(by.tagName('h1'));
    public successPage = browser.element(by.partialLinkText('Success'));

    public until = protractor.ExpectedConditions;

    public getHeaderName() {
        return browser.wait(this.until.visibilityOf(this.successPage), 5000, 'Element taking too long to appear in the DOM')
            .then(() => this.headerName.getText())

    }

}