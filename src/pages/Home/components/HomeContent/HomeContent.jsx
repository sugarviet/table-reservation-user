import styles from "./HomeContent.module.css";
import { Select, Form, DatePicker, Space, Button } from "antd";
import Search from "../../../../assets/search.png";
import HomeTable from "../HomeTable/HomeTable";
import { onFinish } from "../../components/hooks/useSearchTable";
import { useState } from "react";
import axios from "axios";
import Loading from '../../../../components/Loading/Loading'
import EmptyData from '../../../../components/EmptyData/EmptyData'

const HomeContent = () => {
  onFinish;
 
  const [data, setData] = useState(null);
  const [capacity, setCapacity] = useState(0);
  const [timeRangeType, setTimeRangeType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = async () => {
    try {
      setIsFormSubmitted(true);
      setIsLoading(true);
      let api = `http://localhost:7070/table/search?`;
      if (capacity !== 0) {
        api += `capacity=${capacity}&`;
      }

      if (timeRangeType !== "") {
        api += `timeRangeType=${timeRangeType}`;
      }
      const response = await axios.get(api);
      setData(response.data.listTable);
      console.log(response.data.listTable);
      setIsLoading(false);
      
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.homeContent}>
      <h1 className={styles.homeHeader}>Table Reservation Online</h1>
      <p className={styles.homeDes}>Book your table early at our restaurant</p>
      <div className={styles.homeSearch}>
        <Form className={styles.homeForm} onFinish={handleFormSubmit} >
          <div className={styles.homeGroup}>
            <div className={styles.homeChoose}>
              <p className={styles.homeTitleChoose}>Capacity of table</p>
              <Form.Item>
                <Space wrap>
                  <Select
                    value={undefined}
                    placeholder="Select capacity "
                    style={{
                      width: 140,
                    }}
                    bordered={false}
                    options={[
                      {
                        value: "4",
                        label: "4 people",
                      },
                      {
                        value: "6",
                        label: "6 people",
                      },
                      {
                        value: "8",
                        label: "8 people",
                      },
                      {
                        value: "10",
                        label: "10 people",
                      },
                    ]}
                    onChange={(value) => setCapacity(value)}
                  />
                </Space>
              </Form.Item>
            </div>
            <div className={styles.homeChoose}>
              <p className={styles.homeTitleChoose}>Date</p>
              {/* <Form.Item>
                <DatePicker bordered={false} />
              </Form.Item> */}
              <DatePicker bordered={false} />
            </div>
            <div className={styles.homeChoose}>
              <p className={styles.homeTitleChoose}>Time</p>
              <Form.Item>
                <Space wrap>
                  <Select
                    // mode="multiple"
                    value={undefined}
                    placeholder="Select time range"
                    style={{ width: 150 }}
                    bordered={false}
                    options={[
                      {
                        value: "6h",
                        label: "6:00",
                      },
                      {
                        value: "8h",
                        label: "8:00",
                      },
                      {
                        value: "9h",
                        label: "9:00",
                      },
                      {
                        value: "10h",
                        label: "10:00",
                      },
                      {
                        value: "12h",
                        label: "12:00",
                      },
                    ]}
                    onChange={(value) => setTimeRangeType(value)}
                  >
                    {/* {plainOptions.map((option) => (
                      <Option key={option} value={option}>
                        {option}
                      </Option>
                    ))} */}
                  </Select>
                </Space>
              </Form.Item>
            </div>

            <Button className={styles.homeBtn} htmlType="submit">
              <div className={styles.homeChoose1}>
                <img style={{ width: "30px" }} src={Search}></img>
                <p className={styles.homeSearchTxt}>Search</p>
              </div>
            </Button>
          </div>
        </Form>
      </div>
      <div className={styles.homeInfor}>
        <h1>Find table for you</h1>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Given your specific preferences, we will make recommendations to suit
          your requirements
        </p>
        <h1 style={{ marginTop: "10px" }}> Or</h1>
        <h1 style={{ marginTop: "10px" }}>Call us : 098123320</h1>
      </div>
      {isLoading ? (
          <Loading />
      ) : (
        isFormSubmitted ? (
          <div>
            {data != null ? (
              <HomeTable data={data} />
            ) : (
              <EmptyData style={{ marginTop: '50px' }} />

            )}
          </div>
        ) : null
      )}

    </div>
  );
};
export default HomeContent;
