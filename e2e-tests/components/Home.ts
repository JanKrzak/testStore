import {browser, by} from 'protractor';

export class Home {

    public navigateTo() {
        return browser.get(browser.baseUrl);
    }

    public clickOnProductByName(productName: string) {
        return browser.element(by.partialLinkText(productName)).click();
    }
}