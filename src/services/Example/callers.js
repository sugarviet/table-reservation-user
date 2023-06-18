import axios from "axios";

import { API_GET_USERS } from "./api_path";

export const getAllUser = async () => {
  const res =  await axios.get(API_GET_USERS);

  return res.data;
};

