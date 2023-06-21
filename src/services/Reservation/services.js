import { useMutation, useQuery } from "@tanstack/react-query";
import { reservation,getReservation } from "./callers";
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
export const useGetReservation = () => {
  return useQuery({
    queryKey: ["get_reservation"],
    queryFn: () => getReservation(),
  }, {
    staleTime: '100000'
  });
};
