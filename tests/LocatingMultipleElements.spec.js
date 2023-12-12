const { test, expect } = require('@playwright/test');
const { log } = require('console');

test('Locateing Multiple Elements', async({page}) =>{
    
    await page.goto('https://demoblaze.com/');

    // const links = await page.$$('a');

    // for(const link of links){
    //     const linktext = await link.textContent();  //similar with getText()
    //     console.log(linktext);
    // }
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
        
    }


})