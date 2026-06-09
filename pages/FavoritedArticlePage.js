export class ProfileFavoritesPage {
constructor(page) {
    this.page = page;

    this.favoritesLink = page.getByRole('link', { name: 'Favorited Articles' });
    this.articles = page.locator('.article-preview');
    this.favoriteArticle = page.locator('.article-preview h1').first();
    
}

    async openFavorites() {
        await this.favoritesLink.click();
    }

    async openFirstFavorite() {
        await this.articles.first().click();
    }
}