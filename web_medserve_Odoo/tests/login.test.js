describe('Web Login', () => {
  describe('Web Form', () => {
    it('should login sucessfully with correct credentilas', async () => {

      await browser.url('https://testmedserve.ethicsgroup.in/web/login');
      await browser.pause(2000);

      // Fill the username + password + Click on login button

      const username = await $('[type = "text"]');
      await username.waitForExist({ Timeout: 2000 });
      await username.setValue('quality@ethicsgroup.in');
      await browser.pause(3000);

      const password = await $('[type = "password"]');
      await password.waitForExist({ timeout: 2000 });
      await password.setValue('qc@2025');
      await browser.pause(3000);

      const button = await $('button[type="submit"]');
      await button.waitForExist({ timeout: 2000 });
      await button.click();
      await browser.pause(5000);
      await browser.maximizeWindow();

    })

    it('Should click on PO', async () => {

      // click on purchase module+ CLick on Order + Click on purchase order
      const dashboard = await $("(//i[@class='fa fa-th'])[1]");
      await dashboard.waitForExist({ timeout: 1000 });
      await dashboard.click();
      await browser.pause(1000);

      const purchaseMenu = await $("(//span[normalize-space()='Purchase'])[1]");
      await purchaseMenu.waitForExist({ timeout: 1000 });
      await browser.pause(1000);

      await purchaseMenu.click();
      await browser.pause(1000);

      const Order = await $("//span[normalize-space()='Orders']");
      await Order.waitForExist({ timeout: 1000 });
      await Order.click();
      await browser.pause(1000);

      const purchaseorder = await $("//a[normalize-space()='Purchase Orders']");
      await purchaseorder.waitForExist({ timeout: 3000 });
      await purchaseorder.click();
      await browser.pause(1000);

      const newbtn = await $("(//button[@type='button'][normalize-space()='New'])[2]");
      await newbtn.waitForExist({ timeout: 1000 });
      await newbtn.click();
      await browser.pause(1000);

    })
    
    
    it('Should Fill pupose fill + vendor  on PO + payment terms', async () => {

      //Fill purpose+ Vendor + Payment temrs
      const purposee= await $("(//input[@id='purpose_0'])[1]");
      await purposee.waitForExist({ timeout: 1000 });
      await purposee.setValue('Test Purchase Order');
      await browser.pause(1000);

      const vendor = await $("(//input[@id='partner_id_0'])[1]");
      await vendor.waitForExist({ timeout: 1000 });
      await vendor.setValue('SHRIJI DISTRIBUTORS');
      await browser.keys("Enter");
      await browser.pause(1000);

      const paymentterms = await $("//input[@id='payment_term_id_0']");
      await paymentterms.waitForExist({ timeout: 1000 });
      await paymentterms.setValue('10:90 0 Days after GRN/SRN');
      await browser.keys("Enter");
      await browser.pause(1000);

    })
    
    it('Select product form drop down', async () => {
      
      const addline = await $("//a[normalize-space()='Add a product']");
      await addline.waitForExist({ timeout: 1000 });
      await addline.click();
      await browser.pause(1000);

      const product = await $('div[name="product_id"] input[role="combobox"]');
      await product.waitForExist({ timeout: 1000 });
      await product.setValue('Allopurinol');
      await browser.keys("Enter");
      await browser.pause(1000);
    })

    it ('Set payment date+ click on closed button', async () => {
      const paymentdate = await $("//i[@class='fa fa-cloud-upload fa-fw']");
      await paymentdate.waitForExist({ timeout: 1000 });
      await paymentdate.click();
      await browser.pause(1000); 
    })
  it ('should click on save button +submit for verify button+ submit for approval button+ Approved and confirmed button', async () => {

    const submitforverify = await $("//span[normalize-space()='Submit for Verify']");
    await submitforverify.waitForExist({ timeout: 1000 });
    await submitforverify.click();
    await browser.pause(1000);

    const submitforapproval = await $("//span[normalize-space()='Verify & Submit for Approval']");
    await submitforapproval.waitForExist({ timeout: 1000 });
    await submitforapproval.click();
    await browser.pause(1000);

    const approvedandconfirmed = await $("//span[normalize-space()='Approve & Confirm']");
    await approvedandconfirmed.waitForExist({ timeout: 1000 });
    await approvedandconfirmed.click();
    await browser.pause(1000);

  })

 it ('should click on receipt button ', async () => {
    
     const receiptbtn1= await $("//span[@class='o_stat_text']");
     await receiptbtn1.waitForExist({ timeout: 1000 });
     await receiptbtn1.click();
     await browser.pause(1000);

 })

 it ('should click on detailed opration icon', async () => {

    const detailedoperation= await $("//button[@name='action_detailed_operations']");
    await detailedoperation.waitForExist({ timeout: 1000 });
    await detailedoperation.click();
    await browser.pause(1000);

     })

  it ('should click on qunatity + save button ', async () => {

    const addQty = await $("td[name='quantity']")
    await addQty.waitForExist({ timeout: 2000 });
    await addQty.click();
    await addQty.setValue('1.00');
    await browser.pause(1000);

    // const savebtn= await $("(//button[@class='btn btn-primary o_list_button_save'])[1]");
    // await savebtn.waitForExist({ timeout: 1000 });
    // await savebtn.click();
    // await browser.pause(1000);



 })
    }) 
  })

