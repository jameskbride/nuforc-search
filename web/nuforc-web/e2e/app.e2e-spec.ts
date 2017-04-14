import { NuforcWebPage } from './app.po';

describe('nuforc-web App', () => {
  let page: NuforcWebPage;

  beforeEach(() => {
    page = new NuforcWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
