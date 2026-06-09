import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage'
import { YourfeedPage } from '../pages/FeedPage'
import { generateUser } from '../helpers/userFactory'
import { ArticlePage } from '../pages/ArticlePage'
import { ProfilePage } from '../pages/ProfilePage'
import { ProfileFavoritesPage } from '../pages/FavoritedArticlePage'


// todo при добавлении нового теста, данные будут использованы те же самые
const URL = 'https://realworld.qa.guru/';


function getUrl () {
    return URL;
}

const url = getUrl();



test('Добавленная в избранное статья отображается во вкладке Favorited Articles', async ({ page }) => {

    await page.goto(url);

    //Инициализируем странички
    const main = new MainPage(page);
    const registration = new RegistrationPage(page);
    const yourfeed = new YourfeedPage(page);
    const user = generateUser();
    const newArticle = new ArticlePage(page);
    const profile = new ProfilePage(page);
    const favorite = new ProfileFavoritesPage(page);

    await main.openSignUpPage();
    await registration.signup(user.username, user.email, user.password);
    await yourfeed.openGlobalFeed();
    await yourfeed.openFirstArticle(); 
    await newArticle.addToFavorites(); 
    await profile.openProfilePage();
    await favorite.openFavorites();
    await favorite.openFirstFavorite();

    await expect(favorite.favoriteArticle).toBeVisible();

});




