import { browser, by, element } from '../node_modules/protractor'

export class WebUiPage {
  public navigateTo() {
    return browser.get('/')
  }

  public getParagraphText() {
    return element(by.css('app-root app-header span')).getText()
  }
}
