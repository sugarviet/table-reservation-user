import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { reservation, getReservation, cancelReservation } from "./callers";
import { notification } from "antd";
// import { useNavigate } from "react-router-dom";

export const useReservation = () => {
  return useMutation(reservation, {
    onSuccess: () => {
      notification.success({
        message: "Reservation Added",
        description: "The reservation has been added successfully.",
      });
    },
    onError: () => {
      notification.error({
        message: "Reservation failed",
      });
    },
  });
};
export const useGetReservation = () => {
  return useQuery(
    {
      queryKey: ["get_reservation"],
      queryFn: () => getReservation(),
    },
    {
      staleTime: "100000",
    }
  );
};
export const useCancelReservation = () => {
  const queryClient = useQueryClient();
  return useMutation(cancelReservation, {
    onSuccess: () => {
      notification.success({
        message: "Cancel Reservation Successfully!",
      });
      queryClient.invalidateQueries("get_reservation");
    },
    onError: () => {
      notification.error({
        message: "Cancel Reservation failed",
      });
    },
  });
};
