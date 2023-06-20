import styles from './ReservationInfor.module.css'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Row, Col } from 'antd';
import user from '../../../assets/user.png'
import history from '../../../assets/file.png'
import logout from '../../../assets/logout.png'
import { useState } from 'react';
const ReservationInfor = () => {
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    setActive(id);
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
                    <h1 style={{ color: '#242E52', fontSize: '18px', paddingLeft: '10px', paddingTop: '5px' }}>Trường Giang</h1>
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
