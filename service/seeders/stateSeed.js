'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const STATES = [
      { name: 'Ciudad de México', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Aguascalientes', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Baja California', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Baja California Sur', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Campeche', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chiapas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chihuahua', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Coahuila', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Colima', createdAt: new Date(), updatedAt: new Date() }
    ];
    return queryInterface.bulkInsert('States', STATES);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('States', null, []);
  }
};
