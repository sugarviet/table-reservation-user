import styles from './BookingContent.module.css'
import location from '../../../assets/pin.png'
import calendar from '../../../assets/calendar.png'
import people from '../../../assets/user.png'
import paypal from '../../../assets/paypal.png'
import {
    Button,
    Form,
    Input,
    Select,
    Space
} from 'antd';


const BookingContent = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+84</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div style={{ textAlign: 'center' }}>
            <Form layout="vertical">
                <h1 style={{ paddingTop: '90px', color: '#ffffff' }}>Please check your reservation information</h1>
                <div className={styles.bookingContent}>
                    <div className={styles.bookingDetail}>
                        <img style={{ width: '27px' }} src={location} />
                        <p style={{ fontSize: '14px', fontWeight: '500', padding: '5px 0 0 7px' }}>Yummy Pot</p>
                    </div>
                    <div className={styles.bookingDetail}>
                        <img style={{ width: '25px' }} src={people} />
                        <p style={{ fontSize: '14px', fontWeight: '500', padding: '5px 0 0 7px' }}>Table for 4 people</p>
                    </div>
                    <div className={styles.bookingDetail}>
                        <img style={{ width: '25px' }} src={calendar} />
                        <p style={{ fontSize: '14px', fontWeight: '500', padding: '5px 0 0 7px' }}>18/06/2023, 6:45 PM</p>
                    </div>
                </div>
                <h1 style={{ paddingTop: '20px', color: '#ffffff', fontSize: '18px', marginRight: '300px' }}>Please provide the contact information used to make your reservation:</h1>
                <div className={styles.bookingContent1}>
                    <div className={styles.bookingDetail}>
                        <Form.Item
                            name="name"
                            label={<span style={{ color: '#19912b' }}>Full Name</span>}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your full name!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input size="large" style={{ width: '420px' }} />
                        </Form.Item>
                        <Form.Item
                            name="arrivaltime"
                            label={<span style={{ color: '#19912b' }}>Arrival Time</span>}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your arrival time!',
                                    whitespace: true,
                                },
                            ]}
                            style={{ paddingLeft: '38px' }}
                        >
                            <Input size="large" style={{ width: '420px' }} />
                        </Form.Item>
                    </div>
                    <div >
                        <Form.Item
                            name="phone"
                            label={<span style={{ color: '#19912b' }}>Phone Number</span>}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '48%',
                                }}
                                size="large"
                            />
                        </Form.Item>

                    </div>
                    <p><span style={{ color: '#ff4d4f', fontSize: '20px' }}>* </span>is a required field, you must enter it completely.</p>
                </div>
                <h1 style={{ paddingTop: '20px', color: '#ffffff', fontSize: '18px', marginRight: '820px' }}>Payment:</h1>
                <div className={styles.bookingContent1}>
                    <Space wrap>
                        <Button htmlType="submit" className={styles.bookingBook1} icon={<img style={{ width: '15px' ,marginTop:'1px'}} src={paypal} />} size='large' type="primary">PayPal</Button>
                    </Space>
                </div>
                <div className={styles.bookingContent1}>
                    <Space wrap>
                        <Button htmlType="submit" className={styles.bookingBook} type="primary">Booking now</Button>
                    </Space>
                </div>
            </Form>
        </div>
    )
}
export default BookingContent; 
