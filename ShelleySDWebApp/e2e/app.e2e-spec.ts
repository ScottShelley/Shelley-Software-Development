import { AappPage } from './app.po';

describe('aapp App', () => {
  let page: AappPage;

  beforeEach(() => {
    page = new AappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
