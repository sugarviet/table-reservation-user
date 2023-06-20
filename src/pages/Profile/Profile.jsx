import styles from './Profile.module.css'
import ReservationInfor from './components/ReservationInfor';

 const Profile = () => {
  return (
    <div className={styles.profile}>
        <ReservationInfor/>
    </div>
  )
}
export default Profile;
