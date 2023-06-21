import { useMutation } from "@tanstack/react-query";
import { reservation } from "./callers";
import { notification } from "antd";
// import { useNavigate } from "react-router-dom";

export const useReservation = () => {
  // const navigate = useNavigate();
  return useMutation(reservation, {
    onSuccess: () => {
      notification.success({
        message: "Reservation Added",
        description: "The reservation has been added successfully.",
      });
      // navigate('/');
    },
    onError: () => {
      notification.error({
        message: "Reservation failed",
      });
    },
  });
};
