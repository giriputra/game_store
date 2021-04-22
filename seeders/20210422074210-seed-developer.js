'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const developers = require('../data/developers.json')
    developers.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    })
    return queryInterface.bulkInsert('Developers', developers)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Developers', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
