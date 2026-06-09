import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage'
import { YourfeedPage } from '../pages/FeedPage'
import {generateUser} from '../helpers/userFactory'


// todo при добавлении нового теста, данные будут использованы те же самые
const URL = 'https://realworld.qa.guru/';


function getUrl () {
    return URL;
}

const url = getUrl();


test('Пользователь может зарегистрироваться используя email и пароль', async ({ page }) => {

    await page.goto(url);

    //Инициализируем странички
    const main = new MainPage(page);
    const registration = new RegistrationPage(page);
    const yourfeed = new YourfeedPage(page);
    const user = generateUser()

    await main.openSignUpPage();
    await registration.signup(user.username, user.email, user.password);
    await expect(await yourfeed.getProfileName()).toContainText(user.username);
});
