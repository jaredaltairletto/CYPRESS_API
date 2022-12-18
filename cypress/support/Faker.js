const { faker } = require('@faker-js/faker');

const email = faker.internet.email();
module.exports =  { email };