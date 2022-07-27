import { DataTypes } from "sequelize";
import { sequelize } from "../database/sqlConnection.js";
import { State } from "./State.js";

export const City = sequelize.define("City", {
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

State.hasMany(City, { foreignKey: "stateId", sourceKey: "id" });
City.belongsTo(State, { foreignKey: "stateId", target: "id" });
