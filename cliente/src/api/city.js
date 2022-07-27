import axios from "axios";

const url = "http://localhost:3080/api";

export const getCityById = async (id) => {
  const response = await axios.get(`${url}/cities/${id}`);
  return response.data;
}