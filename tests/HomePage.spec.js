const { test, expect } = require('@playwright/test')
//import {test, expect} from '@playwright/test';

test('Homepage test', async({page})=>{
    await page.goto('https://demoblaze.com/');

    const pageTitle = await page.title;
    console.log('Page title:', pageTitle);

    const pageUrl = page.url;
    console.log('Page URL:', pageUrl);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL("https://demoblaze.com/");

    await page.close;
})