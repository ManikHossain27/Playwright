const {test, expect} = require('@playwright/test');

test("SoftAssertions", async({page}) => {
    await page.goto("https://demoblaze.com/index.html");
/*
    //Hard Assertions
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
    await expect(page.locator('.navbar-brand')).toBeVisible();
*/

    //Soft Assertions
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();


    await page.close;
})