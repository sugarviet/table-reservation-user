import axios from "axios";

import { API_GET_CATEGORY } from "./api_path";

export const getAllCategory = async () => {
  const res =  await axios.get(API_GET_CATEGORY);

  return res.data;
};