import axios from 'axios';

const url = 'http://localhost:3080/api';

export const createUser = async (user) => {
  const response = await axios.post(`${url}/user`, user);
  return response.data;
}

export const userLogin = async (user) => {
  const response = await axios.post(`${url}/user/login`, user);
  return response.data;
}