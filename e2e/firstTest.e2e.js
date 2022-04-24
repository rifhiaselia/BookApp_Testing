describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const registerBody = async () => {
    await element(by.id('gotoregister')).tap();
    await element(by.id('input-name')).typeText('bubu test11');
    await element(by.id('input-name')).tapBackspaceKey();
    await element(by.id('input-email')).typeText('bubutest2@gmail.com');
    await element(by.id('input-password')).typeText('jonathan123');
    await element(by.id('submitregister')).tap();
  };

  it('register success', async () => {
    await registerBody()
  });

  it('login success', async () => {
    await element(by.id('emaillogin')).typeText('stevejobss@gmail.com');
    await element(by.id('passwordlogin')).typeText('steve123');
    await element(by.id('submitlogin')).tap();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
