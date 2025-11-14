describe('Mobile Login', () => {
  it('should login successfully', async () => {
    await browser.pause(2000); // Allow app to load

    // Use UiAutomator selector to find the button by text
    const button = await $('android=new UiSelector().text("Continue")');
    await button.waitForExist({ timeout: 5000 }); // Increased timeout to 5 seconds
    await button.click();

    const letsGoBtn = await $('android=new UiSelector().text("Lets Go →")');
    await letsGoBtn.waitForExist({ timeout: 5000 });
    await letsGoBtn.click();

    // Wait for validation message to appear
    // const validationMsg = await $('android=new UiSelector().text("Username is required")');
    // await validationMsg.waitForExist({ timeout: 3000 });

    // Validate the text
    //await expect(validationMsg).toHaveText('Username is required');

    // Optional debug screenshot
    await browser.saveScreenshot('./validation-message.png');
  });

  // it('should log in with valid credentials', async () => {
  //   await browser.pause(3000); // Give the app time to load

  //   // OPTIONAL: Uncomment if you're inside a WebView
  //   // const contexts = await browser.getContexts();
  //   // console.log('Available contexts:', contexts);
  //   // await browser.switchContext('WEBVIEW_your.app.package'); // e.g., 'WEBVIEW_com.example.app'

  //   // Find username field and enter value
  //   const usernameInput = await $('android=new UiSelector().resourceId("com.ethicsinfotech.gtpos:name/username")');
  //   await usernameInput.waitForExist({ timeout: 3000 });
  //   await usernameInput.setValue('Admin');

  //   // Find password field and enter value
  //   const passwordInput = await $('android=new UiSelector().resourceId("com.ethicsinfotech.gtpos:name/password")');
  //   await passwordInput.waitForExist({ timeout: 3000 });
  //   await passwordInput.setValue('Admin@123');

  //   // Click the login button (assuming it says "Lets Go →")
  //   const submitButton = await $('android=new UiSelector().text("Lets Go →")');
  //   await submitButton.waitForExist({ timeout: 3000 });
  //   await submitButton.click();

  //   // ✅ Validation: wait for inventory/dashboard page after login
  //   const dashboardElement = await $('android=new UiSelector().textContains("Inventory")'); // adjust as needed
  //   await dashboardElement.waitForExist({ timeout: 5000 });

  //   // Optional screenshot
  //   await browser.saveScreenshot('./capacitor-login-success.png');
  // });


  it('should log in with valid credentials', async () => {
  await browser.pause(3000); // Give app time to load

  // Switch to WebView context
  const contexts = await browser.getContexts();
  console.log('Available contexts:', contexts);

  const webviewContext = contexts.find((ctx) => ctx.includes('WEBVIEW'));
  if (!webviewContext) throw new Error('WebView context not found');
  await browser.switchContext(webviewContext);

  // ✅ Use HTML input fields by their "name" attribute
  const usernameInput = await $('[name="username"]');
  await usernameInput.waitForExist({ timeout: 3000 });
  await usernameInput.setValue('Admin');

  const passwordInput = await $('[name="password"]');
  await passwordInput.waitForExist({ timeout: 3000 });
  await passwordInput.setValue('Admin@123');

  const submitButton = await $('button[type="submit"]');
  await submitButton.waitForClickable({ timeout: 3000 });
  await submitButton.click();

  // ✅ Validation: Wait for page change or visible element
  const dashboardElement = await $('body'); // Adjust to an actual dashboard element
  await dashboardElement.waitForExist({ timeout: 5000 });

  await browser.saveScreenshot('./capacitor-login-success.png');
});
});
