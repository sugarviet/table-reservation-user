import axios from 'axios';
import { API } from './api_path';

export const login = async ({phone,password}) => {
    console.log("dataLogin", { phone, password });
  const res = await axios.post(API.LOGIN, { phone, password });

  return res.data;
}