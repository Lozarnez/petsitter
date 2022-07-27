import { City } from '../models/City.js';

export const getCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    res.json(cities);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const getCityById = async (req, res) => {
  const { id } = req.params;

  try {
    const city = await City.findByPk(id);
    res.json(city);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}