import { browser, by, element } from 'protractor';

export class DynamicFormPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('drs-root h1')).getText();
  }
}
