import { request } from "../../utils/request";
import { API_RESERVATION } from "./api_path";

export const reservation = async ({ tables, arrivalTime }) => {
  console.log(tables, arrivalTime);
  const res = await request.post(API_RESERVATION.RESERVATION, {
    tables,
    arrivalTime,
  });
  return res.data;
};
export const getReservation = async () => {
  const res = await request.get(API_RESERVATION.GET_RESERVATION);
  console.log(res.data.reservation);
  return res.data.reservation;
};
export const cancelReservation = async (data) => {
  const res = await request.put(API_RESERVATION.RESERVATION, data);
  return res.data;
};
