describe('wer Login', () => {
    describe('Web Form' , () => {
        it('should add Batch', async () =>{
            await browser.url ('http://qa.gtpos.ethicstechnology.net/');

            const username = await $('[name ="userId"]');
            await username.waitForExist({timeout:2000});
            await username.setValue('Admin');
            await browser.pause(2000);

            const password = await $('[name= "password"]');
            await password.waitForExist({timeout:2000});
            await password.setValue('Admin@123');
            await browser.pause (2000);

            const button = await $('[type="button"]');
            await button.waitForExist({timeout:3000});
            await button.click();
            await browser.pause (10000);

            const inventory = await $( "(//span[contains(text(),'Inventory')])[1]" );
            await inventory.waitForExist({timeout:5000});
            await inventory.click();
            await browser.pause (2000);

            // Click on batch master and click on Add button 
            const batch = await $( "//span[contains(text(),'Batch Master')]" );
            await batch.waitForExist({timeout:5000});
            await batch.click();
            await browser.pause (4000);

            const itemname = await $ ("(//div[@class='css-hlgwow'])[1]");
            await itemname.waitForExist({timeout:5000});
            await itemname.click();
            await browser.pause (10000);

        })
    })
    })