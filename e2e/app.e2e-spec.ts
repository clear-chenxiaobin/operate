import { OperatePage } from './app.po';

describe('operate App', function() {
  let page: OperatePage;

  beforeEach(() => {
    page = new OperatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
