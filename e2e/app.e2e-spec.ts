import { ControlEntregasPage } from './app.po';

describe('control-entregas App', function() {
  let page: ControlEntregasPage;

  beforeEach(() => {
    page = new ControlEntregasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
