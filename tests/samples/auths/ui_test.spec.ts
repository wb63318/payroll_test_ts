import { test, expect } from '@playwright/test';


test.describe('Auth Pages Ui tests', () => {
    test.describe('Login Page Ui Test', () => {
        test('Login Page is visible, accessible and contains the needed information', async ({ page }) => {
            await page.goto(process.env.Base_URL!);
            console.log(await page.title()); 
        })
    })
})