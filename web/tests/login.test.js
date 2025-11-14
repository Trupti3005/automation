describe('Web Login', () => {
  describe('Web Form', () => {
    it('should show username validation message on submit', async () => {
      await browser.url('/'); // 👈 Loads baseUrl (set in wdio.conf.js)

      const button = await $('button[type="submit"]');
      await button.waitForExist({ timeout: 1000 });
      await button.click();

      const validationMsg = await $('.text-red-400.text-sm');
      await validationMsg.waitForExist({ timeout: 1000 });

      await expect(validationMsg).toHaveText('Username is required');

      await browser.saveScreenshot('./web-validation.png');
    });

    it('should show password validation message on submit', async () => {
      await browser.url('/'); // Load the base URL

      const button = await $('button[type="submit"]');
      await button.waitForExist({ timeout: 1000 });
      await button.click();

      // Wait for the password validation message using data-testid
      const passwordError = await $('[data-testid="login-password-error"]');
      await passwordError.waitForExist({ timeout: 1000 });

      // Assert the validation message text
      await expect(passwordError).toHaveText('Password must be at least 6 characters');

      // Optional: take a screenshot for debugging
      await browser.saveScreenshot('./validation-message.png');
    });

    it('should log in with valid credentials', async () => {
      await browser.url('/'); // Go to login page

      // Fill in username
      const usernameInput = await $('[name="username"]');
      await usernameInput.waitForExist({ timeout: 1000 });
      await usernameInput.setValue('Admin'); // 🔁 Replace with a real username

      // Fill in password
      const passwordInput = await $('[name="password"]');
      await passwordInput.waitForExist({ timeout: 1000 });
      await passwordInput.setValue('Admin@123'); // 🔁 Replace with a real password

      // Submit the form
      const submitButton = await $('button[type="submit"]');
      await submitButton.waitForClickable({ timeout: 1000 });
      await submitButton.click();

      // 🧪 Option 1: Check if navigated to dashboard or another route
      await browser.waitUntil(
        async () => (await browser.getUrl()).includes('/inventory'),
        {
          timeout: 5000,
          timeoutMsg: 'Expected to be redirected to /dashboard after login',
        }
      );

      // 🧪 Option 2: Check if a success toast appears
      // const toast = await $('[data-testid="toast-success"]'); // You may need to add data-testid to Toast
      // await toast.waitForExist({ timeout: 3000 });
      // await expect(toast).toHaveTextContaining('Login successful');

      // 🧪 Option 3: Check if dashboard or another element appears
      // const dashboardHeader = await $('h1=Dashboard'); // or some element that appears after login
      // await dashboardHeader.waitForExist({ timeout: 3000 });

      // Optional: take screenshot after login
      await browser.saveScreenshot('./login-success.png');
    });

  });

});
