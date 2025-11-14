describe('Web Login', () => {
  describe('Web Form' , () => {
    it('should show validation message on submit', async () =>{

      await browser.url ('https://testmedserve.ethicsgroup.in/web/login');
      await browser.pause(2000);

      // Fill the username + password + Click on login button

      const username = await $('[type = "text"]');
      await username.waitForExist ({Timeout:1000});
      await username.setValue('quality@ethicsgroup.in');
      await browser.pause(1000);

      const password = await $ ('[type = "password"]');
      await password.setValue('qc@2025');
      await browser.pause (5000);

      const button = await $('button[type="submit"]');
      await button.waitForExist({timeout:1000});
      await button.click();
      await browser.pause (5000);
      await browser.maximizeWindow();

      const dashboard = await $("(//i[@class='fa fa-th'])[1]");
      await dashboard.waitForExist({ timeout: 1000 });
      await dashboard.click();
      await browser.pause(2000);

      const purchaseMenu = await $("(//span[normalize-space()='Purchase'])[1]");
      await purchaseMenu.waitForExist({ timeout: 1000});
      await browser.pause(1000);

      // Access Purchase Module (optional if you want to click it)
      await purchaseMenu.click();
      await browser.pause(2000);

    // Wait for 'Requests for Quotation' section to load
      const rfqSection = await $("//*[text()='Requests for Quotation']");
      await rfqSection.waitForExist({ timeout: 2000 });
      await browser.pause(1000);
 
      // Click on new button
      const newbutton = await $ ("(//button[@type='button'][normalize-space()='New'])[2]");
      await newbutton.waitForExist({timeout:1000});
      await newbutton.click();
      await browser.pause (3000);

      // fill the pupose + Vendor + Payment Terms
      const pupose = await $('[class= "o_input"]');
      await pupose.waitForExist({ timeout: 2000 });
      await pupose.setValue('Purchase of Medicines');
      await browser.pause(1000);

      const vendor = await $("//input[@id='partner_id_0']");
      await vendor.waitForExist({ timeout: 2000 });
      await vendor.setValue('[3397] ****SHRIJI DISTRIBUTORS  ( NARODA )');
      await browser.keys('Enter');
      await browser.pause(2000);

      const payment = await $("//input[@id='payment_term_id_0']");
      await payment.waitForExist({ timeout: 2000 });
      await payment.setValue('100% Advance Order');
      await payment.click();
      await browser.pause(5000);
      
      //click on add product + click on search product + select product
      // const addproduct = await $("(//a[normalize-space()='Add a product'])");
      // await addproduct.waitForExist({ timeout: 2000 });
      // await addproduct.click();
      // await browser.pause(2000);

      // const productline = await $('div[name="product_id"] input[role="combobox"]');
      // await productline.click();
      // await productline.waitForExist({ timeout: 2000 });
      // await productline.setValue('Allopurinol');
      // await browser.keys('Enter');
      // await browser.pause(10000);

      // //set payment date and add date
      // const paymentdate = await $("//span[normalize-space()='Set Payment Date']");
      // await paymentdate.click();
      // await browser.pause(3000); 





      





    })
  })
})
