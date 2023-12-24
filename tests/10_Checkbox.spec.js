 const {test, expect} = require('@playwright/test');

 test("Handle Checkboxes", async ({page})=>{

    await page.goto("https://itera-qa.azurewebsites.net/home/automation");

    //single Checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    //await page.check("//input[@id='monday' and @type='checkbox']")
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).isChecked().toBeTruthy();
    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).isChecked().toBeFalsy();

    //Multiple Check boxes
    const checkBoxLocators = [
        "//input[@id='saturday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']"
    ];
    for(const locator of checkBoxLocators){//select multiple checkboxes
        await page.locator(locator).check();
    }

    for(const locator of checkBoxLocators){//unselect multiple checkboxes which are already selected
        if(await page.locator(locator).isChecked){
            await page.locator(locator).uncheck();
        }
    }


    await page.waitForTimeout(5000);


 })