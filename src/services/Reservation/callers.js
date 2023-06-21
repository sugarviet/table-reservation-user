import axios from "axios";
import { API_RESERVATION } from "./api_path";

const instance = axios.create({
  withCredentials: true,
});

export const reservation = async ({ tables, arrivalTime }) => {
  console.log("dataReservation", { tables, arrivalTime });
  const token = localStorage.getItem("token");
  const res = await instance.post(API_RESERVATION.RESERVATION, {
    token,
    tables,
    arrivalTime,
  });

  return res.data;
};
export const getReservation = async () => {
  const token = localStorage.getItem("token");
  const res = await instance.post(API_RESERVATION.GET_RESERVATION, { token });
  return res.data.reservation;
};
