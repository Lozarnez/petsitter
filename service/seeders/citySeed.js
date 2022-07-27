'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const CITIES = [
      { name: 'Ciudad de México', stateId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ciudad de Aguascalientes', stateId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ciudad de Baja California', stateId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ciudad de Baja California Sur', stateId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ciudad de Campeche', stateId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ciudad de Chiapas', stateId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ciudad de Chihuahua', stateId: 8, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ciudad de Coahuila', stateId: 9, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ciudad de Colima', stateId: 2, createdAt: new Date(), updatedAt: new Date() }
    ];
    return queryInterface.bulkInsert('Cities', CITIES);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cities', null, []);
  }
};
