describe('Electron Window', () => {
  // it('should resize window', async () => {
  //   const before = await browser.electron.browserWindow('getBounds');
  //   await $('.resize-button').click();
  //   const after = await browser.electron.browserWindow('getBounds');
  //   expect(after.width).toBeLessThan(before.width);
  // });

  it('should show username validation message on submit', async () => {
    await browser.pause(2000); // Give Electron app time to load

    const button = await $('button[type="submit"]');
    await button.waitForExist({ timeout: 1000 });
    await button.click();

    // Wait for the validation message to appear
    const validationMsg = await $('.text-red-400.text-sm');
    await validationMsg.waitForExist({ timeout: 1000 });

    // Assert the validation message is correct
    await expect(validationMsg).toHaveText('Username is required');

    // Optional: take a screenshot for debugging
    await browser.saveScreenshot('./validation-message.png');
  });

  it('should show password validation message on submit', async () => {
    await browser.pause(2000); // Give Electron app time to load

    const button = await $('button[type="submit"]');
    await button.waitForExist({ timeout: 1000 });
    await button.click();

    // Wait for the validation message to appear
    const passwordError = await $('[data-testid="login-password-error"]');
    await passwordError.waitForExist({ timeout: 1000 });

    // Assert the validation message text
    await expect(passwordError).toHaveText('Password must be at least 6 characters');

    // Optional: take a screenshot for debugging
    await browser.saveScreenshot('./validation-message.png');
  });

  it('should log in with valid credentials in Electron app', async () => {
    // Pause to let the Electron app load
    await browser.pause(2000);

    // Fill in username
    const usernameInput = await $('[name="username"]');
    await usernameInput.waitForExist({ timeout: 2000 });
    await usernameInput.setValue('Admin');

    // Fill in password
    const passwordInput = await $('[name="password"]');
    await passwordInput.waitForExist({ timeout: 2000 });
    await passwordInput.setValue('Admin@123');

    // Click the submit button
    const submitButton = await $('button[type="submit"]');
    //await submitButton.waitForClickable({ timeout: 2000 });
    await submitButton.click();

    // Wait for redirection/content change — based on your app logic
    // Option 1: Wait for route/content change — use a DOM element that only appears after login
    // const inventoryPageElement = await $('div*=Inventory'); // adjust selector as needed
    // await inventoryPageElement.waitForExist({ timeout: 5000 });

    // Option 2 (if no route change): Wait for a dashboard element to appear
    // const dashboardHeader = await $('h1=Dashboard');
    // await dashboardHeader.waitForExist({ timeout: 3000 });

    // Option 3: Check for toast message (if present)
    // const toast = await $('[data-testid="toast-success"]');
    // await toast.waitForExist({ timeout: 3000 });
    // await expect(toast).toHaveTextContaining('Login successful');

    // Optional: Screenshot for verification
    await browser.saveScreenshot('./electron-login-success.png');
  });
});
