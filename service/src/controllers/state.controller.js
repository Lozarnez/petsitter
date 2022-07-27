import { State } from '../models/state.js';
import { City } from '../models/city.js';
import { PetSitter } from '../models/petSitter.js';

export const getStates = async (req, res) => {
  try {
    const states = await State.findAll();
    res.json(states);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const getPetSitterByState = async (req, res) => {
  const { id } = req.params;

  try {
    const cities = await City.findAll({ where: { stateId: id }, attributes: ['id'] });
    const petSitters = await PetSitter.findAll({
      where: { cityId: cities.map(city => city.id) }
    });

    res.json(petSitters);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}