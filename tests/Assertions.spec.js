const { test, espect, expect } = require ('@playwright/test');
const exp = require('constants');
test('Assertions', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    //verify the url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
    //verify the url
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const register = await page.locator('.page-title h1');
    await expect(register).toBeVisible();

    const searchBox = await page.locator('small-searchterms');
    await expect(searchBox).toBeEnabled();

    const maleRadio = await page.locator('id=gender-male');
    await maleRadio.check();
    await expect(maleRadio).toBeChecked();

    const checkBox = await page.locator("//input[@id='Newsletter']");
    await expect(checkBox).toBeChecked();

    const regButton = await page.locator("id='register-button'");
    await expect(regButton).toHaveAttribute('type', 'submit');

    
    
    


})