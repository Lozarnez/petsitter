import { DataTypes } from "sequelize";
import { sequelize } from "../database/sqlConnection.js";

export const PetsType = sequelize.define("PetsType", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
