import { sequelize } from "./database/sqlConnection.js";
import { City } from "./models/city.js";
import { PetSitter } from "./models/petSitter.js";
import { PetSitterPetsType } from "./models/PetSitterPetsType.js";
import { PetsType } from "./models/PetsType.js";
import { State } from "./models/State.js";
import { User } from "./models/User.js";

async function createTables() {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa con la base de datos");
    await State.sync();
    await City.sync();
    await PetsType.sync();
    await PetSitter.sync();
    await PetSitterPetsType.sync();
    await User.sync();
  } catch (error) {
    console.log(error);
  }
}

createTables();
