import { DataTypes } from "sequelize";
import { sequelize } from "../database/sqlConnection.js";
import { City } from "./City.js";
import { PetsType } from "./PetsType.js";

export const PetSitter = sequelize.define("PetSitter", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cellphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

City.hasMany(PetSitter, { foreignKey: "cityId", sourceKey: "id" });
PetSitter.belongsTo(City, { foreignKey: "cityId", target: "id" });
