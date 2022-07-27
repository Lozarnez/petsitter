import { User } from '../models/User.js';

export const createUser = async (req, res) => {
  const { name, lastName, email, cellphone, address, password } = req.body;

  try {
    const newUser = await User.create({
      name,
      lastName,
      email,
      cellphone,
      address,
      password,
    });

    res.json({user: newUser, message: 'Usuario creado correctamente', status: 'success'});
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, email, cellphone, address, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update({
        name,
        lastName,
        email,
        cellphone,
        address,
        password,
      });
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (user) {
      res.json({user: user, message: 'Usuario logueado', status: 'success'});
    } else {
      res.status(400).json({ message: 'El usuario no existe', status: 'error' });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}