import axios from 'axios';
import { API_ALL_TABLE } from './api_path';

export const getAllTable = async () => {
  const res = await axios.get(API_ALL_TABLE.ALL_TABLE);
  return res.data;
}