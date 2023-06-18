import styles from './HomeTable.module.css';
import { Checkbox, Modal } from 'antd';
import { useState } from 'react';

const HomeTable = () => {
    const timeOptions = ['9:00 AM', '1:00 PM', '5:00 PM'];

    const [selectedTimes, setSelectedTimes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const handleTimeChange = (selected) => {
        if (selected.length <= 2) {
            setSelectedTimes(selected);
            setIsChecked(false);
        } else {
            
            setIsModalOpen(true);
        }
    };


    const handleOk = () => {
        setSelectedTimes([...selectedTimes, timeOptions[2]]); 
        setIsChecked(true);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={{paddingBottom:'50px'}}>
            <hr style={{ width: '60%', textAlign: 'center', margin: '0 auto', marginTop: '100px', marginBottom: '60px' }} />
            <div className={styles.tableTitle}>
                <h1 >Find 1 table suit for your requirements</h1>
                <p style={{ fontSize: '19px', paddingTop: '25px' }}>Table is available at 8:00, 18-06-2023, table for 4 people.</p>
                <p style={{ fontSize: '19px', paddingTop: '3px', color: '#F75A41' }}>* Note about reservation time</p>
                <p style={{ fontSize: '17px', paddingTop: '3px' }}>- Just keep your table in 15 minutes.</p>
                <p style={{ fontSize: '17px', paddingTop: '3px' }}>- If you wnat to choose more time to your dinner,<br /> you can pick up more time at below</p>
            </div>
            <div className={styles.tableTable}>
                <h1 style={{ padding: '20px 20px' }}>Table for 4 people</h1>
                <div className={styles.tableTableTime}>
                    <Checkbox.Group style={{ padding: '20px 20px' }} options={timeOptions} value={selectedTimes} onChange={handleTimeChange} />
                    <Modal
                        title="Alert"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <p>Are you sure to choose all 3 time ranges?.</p>
                    </Modal>
                </div>
            </div>
            <div className={styles.tableTable}>
                <h1 style={{ padding: '20px 20px' }}>Table for 4 people</h1>
                <div className={styles.tableTableTime}>
                    <Checkbox.Group style={{ padding: '20px 20px' }} options={timeOptions} value={selectedTimes} onChange={handleTimeChange} />
                    <Modal
                        title="Alert"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <p>Are you sure to choose all 3 time ranges?.</p>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default HomeTable;
