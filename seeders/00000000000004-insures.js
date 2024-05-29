('use strict');
const { fakerRU: faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let insures = [];
    for (let i = 0; i < 50; i++) {
      insures.push({
        transportId: faker.number.int({ min: 1, max: 50 }),
        userId: faker.number.int({ min: 1, max: 4 }),
        isUser: faker.datatype.boolean({ min: 0, max: 1 }),
        updatedAt: new Date(),
        createdAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('insures', insures);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('insures', null, {});
  },
};
