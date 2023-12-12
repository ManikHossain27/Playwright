const { test, expect } = require ('@playwright/test');
const { log } = require('console');
const exp = require('constants');
//import { test, expect } from '@playwright/test';

test('Locators', async({page}) => {
    await page.goto('https://demoblaze.com/');

    //click on login button     -Property
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //Provide username      -CSS
    //await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername', 'pavanol');
    //await page.type('#loginusername', 'pavanol');

    //provide password      -CSS
    await page.fill("input[id='loginpassword']", 'test@123');

    //click on login button     -xpath
    await page.click("//button[contains(text(),'Log in')]")

    //verify logout link presence       -xpath
    const logoutLink = await page.locator("//a[@id='logout2']");
    await expect(logoutLink).toBeVisible();

    //close page
    await page.close;



})