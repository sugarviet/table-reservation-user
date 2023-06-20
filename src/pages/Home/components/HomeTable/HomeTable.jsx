import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import styles from './HomeTable.module.css';

const HomeTable = ({ data }) => {
    const navigate = useNavigate();
    const handleChooseTable = (table) => {
        navigate('/booking', { state: { selectedTable: table } });
       
    };
    return (
        <div style={{ paddingBottom: '50px' }}>

            <hr style={{ width: '60%', textAlign: 'center', margin: '0 auto', marginTop: '100px', marginBottom: '60px' }} />
            <div className={styles.tableTitle}>
                <h1 >Find {data.length} table suit for your requirements</h1>
                {/* <p style={{ fontSize: '19px', paddingTop: '25px' }}>Table is available at 8:00, 18-06-2023, table for 4 people.</p> */}
                <p style={{ fontSize: '19px', paddingTop: '3px', color: '#F75A41' }}>* Note about reservation time</p>
                <p style={{ fontSize: '17px', paddingTop: '3px' }}>- Just keep your table in 15 minutes.</p>
                <p style={{ fontSize: '17px', paddingTop: '3px' }}>- If you want to choose more time to your dinner,<br /> you can pick up more time at below</p>
            </div>
            {data?.map((table, index) => (
                <div className={styles.tableTable} key={index}>
                    <h1 style={{ padding: '20px 20px' }}>Table for {table?.capacity} people</h1>
                    <div className={styles.tableTableTime}>
                        <Button type="primary" onClick={() => handleChooseTable(table)} className={styles.tableTableBtn}>
                            {table?.timeRangeType}
                        </Button>
                        <p style={{ marginTop: '5px', fontSize: '19px', paddingLeft: '5px' }}>Price: {table?.depositPrice && table.depositPrice.$numberDecimal}$</p>
                    </div>

                </div>
            ))}
        </div>
    )
}
export default HomeTable;
