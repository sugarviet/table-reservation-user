import styles from "./OrderConfirm.module.css";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import confirm from "../../assets/imageconfirm.jpg";
import { Row, Col } from "antd";
import { Button, Space } from "antd";

import calendar from "../../assets/calendar.png";
import dollar from "../../assets/dollar.png";
import people from "../../assets/people.png";
import address from "../../assets/pin.png";
import user from "../../assets/user-profile.png";
import phone from "../../assets/phone.png";
import table from "../../assets/table-red.png";

function OrderConfirm() {
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reservationData = params.get("reservation");
    const decodedData = JSON.parse(decodeURIComponent(reservationData));
    console.log(decodedData);
    setUserData(decodedData);
  }, [location.search]);

  return (
    <div className={styles.orderConfirm}>
      <Row justify="center">
        <Col span={20}>
          <Row>
            <Col span={14}>
              <div
                className={styles.containerLeft}
                style={{ textAlign: "center", marginRight: "70px" }}
              >
                <h2 style={{ paddingTop: "90px", color: "#DA3743" }}>
                  Thank you for your reservation.
                  <br />
                  We successfully confirmed with your request as below
                </h2>
                <div className={styles.bookingContent}>
                  <div className={styles.bookingDetail}>
                    <img
                      style={{ width: "27px" }}
                      src={address}
                      alt="address"
                    />
                    <p className={styles.bookingDetailTitle}>Yummy Pot</p>
                  </div>

                  <div className={styles.bookingDetail}>
                    <img style={{ width: "25px" }} src={people} alt="people" />
                    <p className={styles.bookingDetailTitle}>
                      {userData?.fullName}
                    </p>
                  </div>
                  <div className={styles.bookingDetail}>
                    <img
                      style={{ width: "25px" }}
                      src={calendar}
                      alt="calendar"
                    />
                    <p className={styles.bookingDetailTitle}>
                      {userData?.arrivalTime}
                    </p>
                  </div>
                  <div className={styles.bookingDetail}>
                    <img style={{ width: "27px" }} src={dollar} alt="address" />
                    <p className={styles.bookingDetailTitle}>
                      ${userData?.depositAmount?.$numberDecimal}
                    </p>
                  </div>
                </div>

                <h1
                  style={{
                    paddingTop: "20px",
                    color: "#DA3743",
                    fontSize: "18px",
                    float: "left",
                    paddingBottom: "10px",
                  }}
                >
                  Your Details:
                </h1>
                <div className={styles.bookingContent1}>
                  <div className={styles.bookingDetail}>
                    <img
                      style={{ width: "28px", height: "28px" }}
                      src={user}
                      alt="people"
                    />
                    <div className={styles.bookingDetailColumn}>
                      <p className={styles.bookingDetailConfirm}>Full Name</p>
                      <p className={styles.bookingDetailConfirm1}>
                        {userData?.fullName}
                      </p>
                    </div>
                  </div>
                  <div className={styles.bookingDetail}>
                    <img
                      style={{ width: "25px", height: "25px" }}
                      src={phone}
                      alt="people"
                    />
                    <div className={styles.bookingDetailColumn}>
                      <p className={styles.bookingDetailConfirm}>Phone</p>
                      <p className={styles.bookingDetailConfirm1}>
                        0{userData?.phone}
                      </p>
                    </div>
                  </div>
                  <div className={styles.bookingDetail}>
                    <img
                      style={{ width: "25px", height: "25px" }}
                      src={table}
                      alt="people"
                    />
                    <div className={styles.bookingDetailColumn}>
                      <p className={styles.bookingDetailConfirm}>
                        Number table
                      </p>
                      <p className={styles.bookingDetailConfirm1}>
                        Table {userData.tables[0].table.tableNumber}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.bookingContent1}>
                  <Space wrap>
                    <Link to="/">
                      <Button
                        htmlType="submit"
                        className={styles.bookingBook}
                        type="primary"
                        // onClick={handlePayment}
                      >
                        Back to home
                      </Button>
                    </Link>
                  </Space>
                </div>
              </div>
              {/* <div className={styles.userContent}>
                                <h1 style={{ paddingTop: "100px" }}>Order Successfully</h1>
                                {userData ? (
                                    <div>
                                        <h2>Order detail:</h2>
                                        <p>Họ và tên: {userData.fullName}</p>
                                        <p>Số điện thoại: {userData.phone}</p>
                                        <p>Số điện thoại: {userData.arrivalTime}</p>
                                        <p>Số điện thoại: {userData.depositAmount.$numberDecimal}</p>
                                    </div>
                                ) : (
                                    <p>Đang tải dữ liệu...</p>
                                )}
                            </div> */}
            </Col>
            <Col span={8}>
              <div className={styles.shippingContainer}>
                <img className={styles.shippingImg} src={confirm} alt="" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default OrderConfirm;
