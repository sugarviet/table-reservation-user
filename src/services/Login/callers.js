import { API } from "./api_path";
import { request } from "../../utils/request";

export const login = async ({ phone, password }) => {
  const res = await request.post(API.LOGIN, { phone, password });
  return res.data;
};
