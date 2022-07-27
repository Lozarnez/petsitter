import { DataTypes } from 'sequelize';
import { sequelize } from '../database/sqlConnection.js';

export const State = sequelize.define('State', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});