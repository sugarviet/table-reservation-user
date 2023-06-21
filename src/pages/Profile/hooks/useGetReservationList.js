import { useGetReservation } from "../../../services/Reservation/services";

function useGetReservationList() {
  const { data, isLoading } = useGetReservation();
  console.log("Inside", data);
  return { data, isLoading };
}
export default useGetReservationList;
