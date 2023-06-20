import styles from './Loading.module.css'
import table from '../../assets/table.png'
const Loading = () => {
  return (
    <div className={styles.centeredGif}>
      <img className={styles.table} src={table} />
    </div>
  )
}

export default Loading
