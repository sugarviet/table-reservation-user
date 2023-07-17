import { request } from "../../utils/request";
import { API } from "./api_path";

export const logout = async () => {
  const res = await request.post(API.LOGOUT);
  return res.data;
};
