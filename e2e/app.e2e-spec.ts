import { UsersAjaxPage } from './app.po';

describe('users-ajax App', function() {
  let page: UsersAjaxPage;

  beforeEach(() => {
    page = new UsersAjaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
