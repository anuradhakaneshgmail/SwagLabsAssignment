import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    //await driver.activateApp('com.swaglabsmobileapp.MainActivity')
    await pages[page].inputUsername.click();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see cart on homepage$/, async () => {
   await expect(HomePage.imgCart).toBeDisplayed();
});

Then(/^I should see error (.*) on login page$/, async (message) => {
    await expect(await LoginPage.errorMessage.getText()).toEqual(message);
 });



