export class YourfeedPage {
    constructor (page) {
        // это браузер
        this.page = page;

        // здесь мы описываем техническую реализацию страницы
        
        // здесь все про элементы
        this.profileName = page.getByRole('navigation');
        this.newArticleLink = page.getByRole('link', {name: 'New Article'});
        this.articleNotAvailable = page.locator('.article-preview')
        this.buttonGlobalFeed = page.getByRole('button', { name: ' Global Feed' });
        this.articles = page.locator('h1');
    }

        // Бизнес-сценарии на страничке
    async getProfileName() {
        return this.profileName;
    }

    async openNewArticle() {
        await this.newArticleLink.click();
    }

    async openGlobalFeed () {
        await this.buttonGlobalFeed.click();
    }

    async openFirstArticle() {
        await this.articles.first().click();
    }

}

