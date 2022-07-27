import axios from "axios";

const url = "http://localhost:3080/api";

export const getStateByPetSitterId = async (id) => {
  const response = await axios.get(`${url}/states/${id}/petsitter`);
  return response.data;
}