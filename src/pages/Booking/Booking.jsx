import BookingContent from "../Booking/components/BookingContent/BookingContent";
import styles from './Booking.module.css'
const Booking = () => {
  return (
    <div className={styles.booking}>
        <BookingContent/>
    </div>
  )
}
export default Booking;