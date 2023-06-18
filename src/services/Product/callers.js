import axios from "axios";

import { API_GET_BIRDFOOD, API_GET_BIRD_FOOD} from "./api_path";

export const getAllBirdFood = async () => {
  const res =  await axios.get(API_GET_BIRDFOOD);

  return res.data;
};

export const getBirdFoodById = async (id) => {
  const res =  await axios.get(`${API_GET_BIRD_FOOD}/${id}`);
  
  return res.data;
};