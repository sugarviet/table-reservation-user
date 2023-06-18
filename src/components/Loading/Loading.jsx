import styles from './Loading.module.css'
import loading from '../../assets/loading.gif'

const Loading = () => {
  return (
    <div className={styles.centeredGif}>
      <img className={styles.loading} src={loading}></img>
    </div>
  )
}

export default Loading
