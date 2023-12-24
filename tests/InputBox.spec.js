const {test, expect} = require('@playwright/test');

test('Handle Input', async ({page}) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automaiton');

    //InputBox - First name
    await expect(await page.locator("//hinput[@id='name']")).toBeVisible();
    await expect(await page.locator("//hinput[@id='name']")).toBeEmpty();
    await expect(await page.locator("//hinput[@id='name']")).toBeEditable();
    await expect(await page.locator("//hinput[@id='name']")).toBeEnabled();
    
    await page.locator("//hinput[@id='name']").fill('John');
    //await page.fill("//hinput[@id='name']", 'John');
    
    await page.waitForTimeout(5000);//pause code
})