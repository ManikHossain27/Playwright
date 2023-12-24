const {test, expect} = require('@playwright/test');

test('Handle Input', async ({page}) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automaiton');

    //Radio Button
    await page.locator("//input[@value='option2']").check();//male
    //await page.check("//input[@value='option2']")
    await expect(await page.locator("//input[@value='option2']")).toBeChecked();//male
    await expect(await page.locator("//input[@value='option2']")).isChecked().toBeTruthy();//male

    await expect(await page.locator("//input[@value='option1']")).not.toBeChecked();//female
    await expect(await page.locator("//input[@value='option2']")).isChecked().toBeFalsy();//female
    


    
    await page.waitForTimeout(5000);//pause code
})