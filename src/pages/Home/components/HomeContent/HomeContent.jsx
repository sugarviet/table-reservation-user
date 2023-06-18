import styles from './HomeContent.module.css'
import { Select, Form, DatePicker, Space, Button } from 'antd';
import Search from '../../../../assets/search.png'
import HomeTable from '../HomeTable/HomeTable';

const HomeContent = () => {

  return (
    <div className={styles.homeContent}>
      <h1 className={styles.homeHeader}>Table Reservation Online</h1>
      <p className={styles.homeDes}>Book your table early at our restaurant</p>
      <div className={styles.homeSearch}>
        <Form className={styles.homeForm}>
          <div className={styles.homeGroup}>
            <div className={styles.homeChoose}>
              <p className={styles.homeTitleChoose}>Capacity of table</p>
              <Form.Item>
                <Space wrap>
                  <Select
                    defaultValue="4 people"
                    style={{
                      width: 120,
                    }}
                    bordered={false}
                    options={[
                      {
                        value: '4',
                        label: '4 people',
                      },
                      {
                        value: '6',
                        label: '6 people',
                      },
                      {
                        value: '8',
                        label: '8 people',
                      },
                      {
                        value: '10',
                        label: '10 people',
                      },
                    ]}
                  />
                </Space>
              </Form.Item>
            </div>
            <div className={styles.homeChoose}>
              <p className={styles.homeTitleChoose}>Date</p>
              <Form.Item>
                <DatePicker bordered={false} />
              </Form.Item>
            </div>
            <div className={styles.homeChoose}>
              <p className={styles.homeTitleChoose}>Time</p>
              <Form.Item>
                <Space wrap>
                  <Select
                    // mode="multiple"
                    defaultValue='8:00'
                    style={{ width: 120 }}
                    bordered={false}
                    options={[
                      {
                        value: '8',
                        label: '8:00',
                      },
                      {
                        value: '9',
                        label: '9:00',
                      },
                      {
                        value: '10',
                        label: '10:00',
                      },
                      {
                        value: '12',
                        label: '12:00',
                      },
                    ]}
                  >
                    {/* {plainOptions.map((option) => (
                      <Option key={option} value={option}>
                        {option}
                      </Option>
                    ))} */}
                  </Select>
                </Space>
              </Form.Item></div>

            <Button className={styles.homeBtn}>
              <div className={styles.homeChoose1}>
                <img style={{width:'30px'}} src={Search}></img>
                <p className={styles.homeSearchTxt}>Search</p>
              </div>
            </Button>

          </div>
        </Form>
      </div>
    
     <HomeTable/>
    </div>
  )
}
export default HomeContent;
