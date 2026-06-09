export class EditArticlePage {
    constructor (page) {
        // это браузер
        this.page = page;
        // здесь мы описываем техническую реализацию страницы
        // здесь все про элементы
        
        this.titleInput = page.getByRole('textbox', { name: 'Article Title' });
        this.articleAboutInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleTextInput = page.getByRole('textbox', { name: 'Write your article (in' });
        this.tagInput = page.getByRole('textbox', { name: 'Enter tags' }); 
        this.publishArticleButton = page.getByRole('button', { name: 'Publish Article' });
        this.updateArticleButton = page.getByRole('button', { name: 'Update Article' });
    }

    // Бизнес-сценарии на страничке
    async createArticle(articleTitle, articleDescription, articleContent, articleTag ){    
        await this.titleInput.click();
        await this.titleInput.fill(articleTitle);
        await this.articleAboutInput.click();
        await this.articleAboutInput.fill(articleDescription);
        await this.articleTextInput.click();
        await this.articleTextInput.fill(articleContent);
        await this.tagInput.click();
        await this.tagInput.fill(articleTag)
        await this.publishArticleButton.click();
    }

    async updateArticleTitle(articleTitle) {
        await this.titleInput.click();
        await this.titleInput.clear();
        await this.titleInput.fill(articleTitle);
        await this.updateArticleButton.click();
    }

};

