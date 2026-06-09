import { faker } from '@faker-js/faker';

export function generateArticle() {
    return {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        content: faker.lorem.paragraphs(2),
        tag: faker.word.noun()
    };
}
