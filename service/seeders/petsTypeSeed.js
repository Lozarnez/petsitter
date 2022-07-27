"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const PETS_TYPES = [
      {
        description: "Perro",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { description: "Gato", createdAt: new Date(), updatedAt: new Date() },
      { description: "Serpiente", createdAt: new Date(), updatedAt: new Date() },
      {
        description: "Huron",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { description: "Hamster", createdAt: new Date(), updatedAt: new Date() },
      { description: "Perico", createdAt: new Date(), updatedAt: new Date() },
      { description: "Loro", createdAt: new Date(), updatedAt: new Date() },
    ];
    return queryInterface.bulkInsert("PetsTypes", PETS_TYPES);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("PetsTypes", null, []);
  },
};
