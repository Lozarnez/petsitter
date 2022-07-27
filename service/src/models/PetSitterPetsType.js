import { sequelize } from "../database/sqlConnection.js";
import { PetSitter } from "./petSitter.js";
import { PetsType } from "./PetsType.js";


export const PetSitterPetsType = sequelize.define("City", {}, { timestamps: false });

PetSitter.belongsToMany(PetsType, { through: "PetSitterPetsType" });
PetsType.belongsToMany(PetSitter, { through: "PetSitterPetsType" });

