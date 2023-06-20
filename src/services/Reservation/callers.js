import axios from "axios";
import { API_RESERVATION } from "./api_path";

const instance = axios.create({
  withCredentials: true,
});

export const reservation = async ({ tables, arrivalTime }) => {
  console.log("dataReservation", { tables, arrivalTime });

  const res = await instance.post(API_RESERVATION.RESERVATION, {
    tables,
    arrivalTime,
  });

  return res.data;
};
