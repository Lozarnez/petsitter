import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'PetSitter',
  'lozarnez',
  'admin123',
  {
    host: 'localhost',
    dialect: 'mssql',
  }
);