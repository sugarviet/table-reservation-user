import styles from "./HomeContent.module.css";
import { Select, Form, DatePicker, Space, Button } from "antd";
import Search from "../../../../assets/search.png";
import HomeTable from "../HomeTable/HomeTable";
import { onFinish } from "../../components/hooks/useSearchTable";
import { useState } from "react";
import axios from "axios";
import Loading from "../../../../components/Loading/Loading";
import EmptyData from "../../../../components/EmptyData/EmptyData";
import moment from "moment";

const HomeContent = () => {
  onFinish;
  const { Option } = Select;
  const [data, setData] = useState(null);
  const [capacity, setCapacity] = useState(0);
  const [timeRangeType, setTimeRangeType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment(Date.now()));

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
        <Form className={styles.homeForm} onFinish={handleFormSubmit}>
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
              <DatePicker bordered={false} value={selectedDate} disabled />
            </div>
            <div className={styles.homeChoose}>
              <p className={styles.homeTitleChoose}>Time</p>
              <Form.Item>
                <Space wrap>
                  <Select
                    value={undefined}
                    placeholder="Select time range"
                    style={{ width: 150, color: "#000000" }}
                    bordered={false}
                    onChange={(value) => setTimeRangeType(value)}
                  >
                    {[
                      {
                        value: "18h",
                        label: "24:00",
                      },
                      {
                        value: "20h",
                        label: "20:00",
                      },
                      {
                        value: "22h",
                        label: "22:00",
                      },
                    ].map((option) => (
                      <Option
                        key={option.value}
                        value={option.value}
                        disabled={
                          new Date().setHours(
                            Number(option.label.split(":")[0])
                          ) -
                            Date.now() <
                          1 * 60 * 1000
                        }
                      >
                        {option.label}
                      </Option>
                    ))}
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
      {isLoading ? (
        <Loading />
      ) : isFormSubmitted ? (
        <div>
          {data != null ? (
            <HomeTable data={data} />
          ) : (
            <EmptyData style={{ marginTop: "50px" }} />
          )}
        </div>
      ) : null}

      <style>
        {`
        :where(.css-dev-only-do-not-override-lbcgob).ant-select .ant-select-selection-placeholder {
          color: #333333;
        }
        `}
      </style>
    </div>
  );
};
export default HomeContent;
