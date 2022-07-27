import { PetSitter } from '../models/PetSitter.js';

export const createPetSitter = async (req, res) => {
  const { name, lastName, email, cellphone, photoURL, age, cityId } = req.body;

  try {
    const newPetSitter = await PetSitter.create({
      name,
      lastName,
      email,
      cellphone,
      photoURL,
      age,
      cityId,
    });

    res.json(newPetSitter);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const getPetSitterById = async (req, res) => {
  const { id } = req.params;

  try {
    const petSitter = await PetSitter.findByPk(id);
    res.json(petSitter);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const updatePetSitter = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, email, cellphone, photoURL, age, cityId } = req.body;

  try {
    const updatedPetSitter = await PetSitter.update(
      {
        name,
        lastName,
        email,
        cellphone,
        photoURL,
        age,
        cityId,
      },
      {
        where: { id },
      }
    );

    res.json(updatedPetSitter);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const deletePetSitter = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPetSitter = await PetSitter.destroy({
      where: { id },
    });

    res.json(deletedPetSitter);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const getPetSitters = async (req, res) => {
  try {
    const petSitters = await PetSitter.findAll();
    res.json(petSitters);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

