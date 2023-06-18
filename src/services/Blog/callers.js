import axios from "axios";

import { API_GET_BLOG, API_GET_SINGLE_BLOG} from "./api_path";

export const getAllBlog = async () => {
  const res =  await axios.get(API_GET_BLOG);

  return res.data;
};
export const getSingleBlogById = async (id) => {
  const res =  await axios.get(`${API_GET_SINGLE_BLOG}/${id}`);

  return res.data;
};