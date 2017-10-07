import { NuforcWebPage } from './app.po';
import {by, element} from "protractor";

describe('nuforc-web App', () => {
  let page: NuforcWebPage;

  beforeEach(() => {
    page = new NuforcWebPage();
    page.navigateTo();
  });

  it('should show the main page', () => {
    expect(page.getParagraphText()).toEqual('Search for UFO Encounters');
  });

  it('should perform a basic search', () => {
    element(by.css('#search-box')).sendKeys('Fireball');
    element(by.css('#search-button')).click();

    expect(element(by.css('#encounter-summary')).getText()).toEqual("500 orbs being chased by a jet. ((NUFORC Note: We would welcome additional reports. PD))")
  });
});
