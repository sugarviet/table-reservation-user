import { Button, Checkbox, Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './HomeTable.module.css';
const HomeTable = () => {
    const timeOptions = ['8:00 AM', '10:00 PM', '12:00 PM'];
    const navigate = useNavigate();
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const handleTimeChange = (selected) => {
        if (selected.length <= 2) {
            setSelectedTimes(selected);
            setIsChecked(false);
        } else {
            setIsModalOpen1(true);
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
   
    const handleOk1 = () => {
        setSelectedTimes([...selectedTimes, timeOptions[2]]);
        setIsChecked(true);
        navigate("/booking");
        setIsModalOpen1(false);
    };

    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };
    return (
        <div style={{ paddingBottom: '50px' }}>
            <hr style={{ width: '60%', textAlign: 'center', margin: '0 auto', marginTop: '100px', marginBottom: '60px' }} />
            <div className={styles.tableTitle}>
                <h1 >Find 1 table suit for your requirements</h1>
                <p style={{ fontSize: '19px', paddingTop: '25px' }}>Table is available at 8:00, 18-06-2023, table for 4 people.</p>
                <p style={{ fontSize: '19px', paddingTop: '3px', color: '#F75A41' }}>* Note about reservation time</p>
                <p style={{ fontSize: '17px', paddingTop: '3px' }}>- Just keep your table in 15 minutes.</p>
                <p style={{ fontSize: '17px', paddingTop: '3px' }}>- If you want to choose more time to your dinner,<br /> you can pick up more time at below</p>
            </div>
            <div className={styles.tableTable}>
                <h1 style={{ padding: '20px 20px' }}>Table for 4 people</h1>
                <div className={styles.tableTableTime}>
                    <Button type="primary" onClick={showModal} className={styles.tableTableBtn}>
                        8:00
                    </Button>
                    <Modal
                        title="Choose time"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <Checkbox.Group style={{ padding: '20px 20px' }} options={timeOptions} value={selectedTimes} onChange={handleTimeChange} />
                    </Modal>
                    <Modal
                        title="Alert"
                        open={isModalOpen1}
                        onOk={handleOk1}
                        onCancel={handleCancel1}
                    >
                        <p>Are you sure to choose all 3 time ranges?.</p>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default HomeTable;
