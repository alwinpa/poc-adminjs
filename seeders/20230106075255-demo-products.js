'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
        name: 'Bike',
        slug: 'bike',
        status: true,
        description: 'sdgfgs fsdhgfsyd shjdfgjdshfgsd',
        sales_channel: 1,
        insurer:1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Personal Accident',
        slug: 'pa',
        status: true,
        description: 'sdgfgs fsdhgfsyd shjdfgjdsjhahjhjggafgsggjhagjhsghagsfgjhasgfgasghjf asfhjfgjhgfsagjhaghjfgjahs hfgsd',
        sales_channel: 1,
        insurer:2,
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
