import { faker } from '@faker-js/faker';

export function generateUser() {
    return {
        username: faker.person.fullName(),
        email: faker.internet.email({
            lastName: 'BIN',
            provider: 'robot.dev'
        }),
        password: faker.internet.password()
    };
}