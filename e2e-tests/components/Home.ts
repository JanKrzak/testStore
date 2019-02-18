import {browser, by} from 'protractor';

export class Home {

    public navigateTo() {
        //  browser.ignoreSynchronisation = true;
        return browser.get(browser.baseUrl);
    }

    public clickOnProductByName(productName: string) {
        return browser.element(by.partialLinkText(productName)).click();
    }
}