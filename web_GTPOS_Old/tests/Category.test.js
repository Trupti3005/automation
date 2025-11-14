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
            await inventory.waitForExist({timeout:1000});
            await inventory.click();
            await browser.pause (1000);
            await browser.maximizeWindow();

            // Click on Category master and click on Add button 
            const Category = await $( "//span[contains(text(),'Category Master')]" );
            await Category.waitForExist({timeout:5000});
            await Category.click();
            await browser.pause (4000);

            const addCategory = await $( "(//span[normalize-space()='Add Category'])[1]" );
            await addCategory.waitForExist({timeout:5000});
            await addCategory.click();
            await browser.pause (5000);

            const categoryName = await $ ('name = "Category Name"]');
            await categoryName.waitForExist({timeout:5000});
            await categoryName.setValue('Beverages');
            await browser.pause (2000);

            const categorcode = await $ ('name = "Category Code"]');
            await categorcode.waitForExist({timeout:5000});
            await categorcode.setValue('BEV123');
            await browser.pause (2000);

            const more = await $( 'name = "Description"]');
            await more.waitForExist({timeout:5000});
            await more.setValue('Soft Drinks, Coffees, Teas, Juices, etc.');
            await browser.pause (2000);
             



        })
    })
    })