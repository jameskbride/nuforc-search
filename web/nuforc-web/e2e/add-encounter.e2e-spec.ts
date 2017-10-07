import {mockServer} from 'mockserver-grunt';
import {NuforcWebPage} from "./app.po";
import {by, element} from "protractor";

describe('adding an encounter', () => {

  let page: NuforcWebPage;

  beforeEach(() => {
    page = new NuforcWebPage();
    page.navigateTo();
  });

  it('can navigate to the add encounter page', () => {
    element(by.css('#report-encounter')).click();

    expect(element(by.css('#report-your-encounter-text')).getText()).toEqual('Report your encounter:');
  });
});
