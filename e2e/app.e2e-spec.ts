import { NgUpgradeSetupPage } from './app.po';

describe('ng-upgrade-setup App', () => {
  let page: NgUpgradeSetupPage;

  beforeEach(() => {
    page = new NgUpgradeSetupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
