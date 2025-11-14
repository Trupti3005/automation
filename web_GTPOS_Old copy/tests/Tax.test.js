// describe('web login', () => {
//     describe ('Web Form' , ()=> {
//         it ('should add tax', async () =>{
//             await browser.url ('http://qa.gtpos.ethicstechnology.net/');

//            //Fill the username + password + click on login button

//            const username = await $('[name ="userId"]');
//            await username.waitForExist({timeout:2000});
//            await username.setValue('Admin');
//            await browser.pause(1000);

//            const password = await $('[name= "password"]');
//            await password.waitForExist({timeout:2000});
//            await password.setValue('Admin@123');
//            await browser.pause (2000);
           
//            const button = await $('[type="button"]');
//            await button.waitForExist({timeout:3000});
//            await button.click();
//            await browser.pause (10000);

//            //click on inventory and click on tax master
//            const inventory = await $( "(//span[contains(text(),'Inventory')])[1]" );
//            await inventory.waitForExist({timeout:5000});
//            await inventory.click();
//            await browser.pause (2000);

//            const tax = await $( "//span[contains(text(),'Tax Master')]" );
//            await tax.waitForExist({timeout:5000});
//            await tax.click();
//            await browser.pause (4000);

//            const addtax = await $( "//span[normalize-space()='Add Tax']" );
//            await addtax.waitForExist({timeout:5000});
//            await addtax.click();
//            await browser.pause (2000);

//            const tax1 = await $( '[name= "Tax"]');
//            await tax1.waitForExist({timeout:5000});
//            await tax1.setValue('0.20');
//            await browser.pause (1000);

//            const Description = await $( '[name= "Description"]');
//            await Description.waitForExist({timeout:5000});
//            await Description.setValue('New GST');
//            await browser.pause (1000);

//            const save = await $ ("//span[normalize-space()='Save']");
//            await save.waitForExist({timeout:5000});
//            await save.click();
//            await browser.pause (4000);

//             const cancel1 =await $("//span[normalize-space()='Cancel']");
//             await cancel1.waitForExist({timeout:2000});
//             await cancel1.click();
//             await browser.maximizeWindow();
//             await browser.pause (3000);  

//             //click on export button
//             const exportbtn = await $('[class = "button-text"]');
//             await exportbtn.waitForExist({timeout:2000});
//             await exportbtn.click();
//             await browser.pause (3000);



           






//         })

//     })

// })