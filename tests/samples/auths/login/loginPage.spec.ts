import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';


const Credentials = [

    'kofiakuffoboafo@gmail.com',
    'Fred@Axon'

] as const

const Credentials_2 = [
    'wizzy25.wa@gmail.com',
    'NEWPASS'
] as const


test.describe('Axon Payroll LoginPage ', () => {
    test.describe('Check Page Fucntionalities', () => {
        test('Page Is Visible', async ({ page }) => {
            const baseUrl = 'http://84.247.134.126:97/auth/login/';
            await page.goto(baseUrl);
            console.log(await page.title());
        });
    });
});

