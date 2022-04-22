describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('register success', async () => {
    await element(by.id('gotoregister')).tap();
    await element(by.id('input-name')).typeText('bubu test10');
    await element(by.id('input-name')).tapBackspaceKey();
    await element(by.id('input-email')).typeText('bubutest9@gmail.com');
    await element(by.id('input-password')).typeText('jonathan123');
    await element(by.id('submitregister')).tap();
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
