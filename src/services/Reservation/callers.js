import axios from 'axios';
import { API_RESERVATION } from './api_path';

export const reservation = async ({ customerId, tables, arrivalTime }) => {
  console.log("dataReservation", { customerId, tables, arrivalTime });
  const res = await axios.post(API_RESERVATION.RESERVATION, { customerId, tables, arrivalTime });

  return res.data;
}
