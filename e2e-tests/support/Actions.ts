import {ElementFinder} from 'protractor';
import {Product} from '../components/Product'

const product = new Product();

export class Actions {

    public sendKeys(element: ElementFinder, text: string) {
        return element.click()
            .then(() => element.clear())
            .then(() => element.sendKeys(text));
    }
}