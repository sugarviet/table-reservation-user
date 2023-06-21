import { useGetReservation } from "../../../services/Reservation/services";


function useGetReservationList() {

  const { data, isLoading } = useGetReservation();
  return (
    data,
    isLoading
  )
}
export default useGetReservationList;

