import { NgContactsPage } from './app.po';

describe('ng-users App', () => {
  let page: NgContactsPage;

  beforeEach(() => {
    page = new NgContactsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
