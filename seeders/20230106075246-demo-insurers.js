'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Insurers', [{
        name: 'Tata',
        slug: 'tata',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bajaj',
        slug: 'bajaj',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
