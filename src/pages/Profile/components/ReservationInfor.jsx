import styles from './ReservationInfor.module.css'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Row, Col, Badge, Descriptions, Button } from 'antd';
import user from '../../../assets/user.png'
import history from '../../../assets/file.png'
import table1 from '../../../assets/table1.png'
import pin1 from '../../../assets/pin1.png'
import people1 from '../../../assets/people1.png'
import dollar1 from '../../../assets/dollar1.png'
import calendar1 from '../../../assets/calendar1.png'

import logout from '../../../assets/logout.png'
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const ReservationInfor = () => {

  const [active, setActive] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  console.log(decodedToken.customerId);
  const handleActive = (id) => {
    setActive(id);
    if (id == 2) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <Breadcrumb
        style={{ paddingLeft: '158px' }}
        separator=">"
      >
        <Breadcrumb.Item href="/">
          <HomeOutlined />
          <span>Home</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/profile">
          <UserOutlined />
          <span style={{ color: '#000000' }}>My Profile</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="center">
        <Col span={19}>
          <Row >
            <Col span={7}>
              <div className={styles.profileContentLeft}>
                <h1 style={{ color: '#242E52', fontSize: '23px', textAlign: 'center', paddingTop: '20px' }}>My Account</h1>
                <hr style={{ width: '80%', textAlign: 'center', margin: '0 auto', border: '1.5px solid #ffffff', marginTop: '30px', marginBottom: '30px' }} />
                <div style={{ paddingBottom: '10px' }}>
                  <div className={styles.profileLeftName}>
                    <img src={user} style={{ width: '38px', paddingLeft: '10px' }} />
                    <h1 style={{ color: '#242E52', fontSize: '18px', paddingLeft: '10px', paddingTop: '5px' }}>{decodedToken.fullName}</h1>
                  </div>
                  <div
                    onClick={() => handleActive(1)}
                    className={active == 1 ? styles.profileLeftName2 : styles.profileLeftName1}
                  >
                    <img src={history} style={{ width: '22px', marginLeft: '10px' }} />
                    <p style={{ color: '#242E52', fontSize: '14px', paddingLeft: '10px' }}>Reservation History</p>
                  </div>
                  <div
                    onClick={() => handleActive(2)}
                    className={active == 2 ? styles.profileLeftName4 : styles.profileLeftName3}

                  >
                    <img src={logout} style={{ width: '22px', marginLeft: '10px' }} />
                    <p style={{ color: '#242E52', fontSize: '14px', paddingLeft: '10px' }}>Log Out</p>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </Col>
            <Col span={16}>
              <div style={{ marginTop: '28px' }}>
                <h1 style={{ fontSize: '1.3em' }}>Reservation History</h1>
                <hr style={{ width: '100%', border: '1.5px solid #ffffff', margin: '13px 0 13px 0' }} />
                <div className={styles.profileContentRight}>
                  <Descriptions title={<h1 style={{ fontSize: '21px' }}><img src={history} style={{ width: '25px', marginRight: '10px' }} />{decodedToken.fullName} </h1>} bordered>
                    <Descriptions.Item label={<div className={styles.imageProfile}><img src={pin1} style={{ width: '21px', marginRight: '10px' }} /><p style={{fontWeight:'700'}}>Location </p></div>}>Yummy Pot</Descriptions.Item>
                    <Descriptions.Item label={<div className={styles.imageProfile}><img src={table1} style={{ width: '20px', marginRight: '10px' }} /><p style={{fontWeight:'700'}}>Number table </p></div>}>7</Descriptions.Item>
                    <Descriptions.Item label={<div className={styles.imageProfile}><img src={people1} style={{ width: '20px', marginRight: '10px' }} /><p style={{fontWeight:'700'}}>Capacity</p></div>}>10</Descriptions.Item>
                    <Descriptions.Item label={<div className={styles.imageProfile}><img src={dollar1} style={{ width: '20px', marginRight: '10px' }} /><p style={{fontWeight:'700'}}>Price </p></div>}>50$</Descriptions.Item>
                    <Descriptions.Item label={<div className={styles.imageProfile}><img src={calendar1} style={{ width: '20px', marginRight: '10px' }} /><p style={{fontWeight:'700'}}>Arrival time </p></div>} span={2}>
                      20-06-2023, 6:00 AM
                    </Descriptions.Item>

                  </Descriptions>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default ReservationInfor;
