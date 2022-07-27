import axios from "axios";

const url = "http://localhost:3080/api";

export const getPetSitters = async () => {
  const response = await axios.get(`${url}/petSitters`, );
  return response.data;
};
