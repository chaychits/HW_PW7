import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage'
import { YourfeedPage } from '../pages/FeedPage'
import { generateUser } from '../helpers/userFactory'
import { EditArticlePage } from '../pages/EditorPage'
import { generateArticle} from '../helpers/articleFactory';
import { ArticlePage } from '../pages/ArticlePage'



// todo при добавлении нового теста, данные будут использованы те же самые
const URL = 'https://realworld.qa.guru/';


function getUrl () {
    return URL;
}

const url = getUrl();


test('Пользователь может создать новую статью', async ({ page }) => {

    await page.goto(url);

    //Инициализируем странички
    const main = new MainPage(page);
    const registration = new RegistrationPage(page);
    const yourfeed = new YourfeedPage(page);
    const create = new EditArticlePage(page);
    const user = generateUser();
    const newArticle = new ArticlePage(page);
    const article = generateArticle()

    await main.openSignUpPage();
    await registration.signup(user.username, user.email, user.password);
    await yourfeed.openNewArticle();
    await create.createArticle(article.title, article.description, article.content, article.tag)

    await expect(await newArticle.newArticle).toHaveText(article.title);

});
