import {ElementFinder} from 'protractor';

export class Actions {

    public sendKeys(element: ElementFinder, text: string) {
        return element.click()
            .then(() => element.clear())
            .then(() => element.sendKeys(text));
    }
}