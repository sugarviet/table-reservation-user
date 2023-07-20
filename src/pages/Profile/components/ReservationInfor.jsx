import styles from "./ReservationInfor.module.css";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Row, Col, Descriptions, Button } from "antd";
import user from "../../../assets/user.png";
import history from "../../../assets/file.png";
import table1 from "../../../assets/table1.png";
import pin1 from "../../../assets/pin1.png";
import people1 from "../../../assets/people1.png";
import dollar1 from "../../../assets/dollar1.png";
import calendar1 from "../../../assets/calendar1.png";

import logout from "../../../assets/logout.png";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import useGetReservationList from "../hooks/useGetReservationList";
import { useLogOut } from "../../../services/Logout/services";
import { useCancelReservation } from "../../../services/Reservation/services";

const ReservationInfor = () => {
  const { data } = useGetReservationList();
  const { mutate } = useLogOut();
  const [active, setActive] = useState(null);
  let decodedToken = null;
  const navigate = useNavigate();
  const { mutate: cancelReservation } = useCancelReservation();
  useEffect(() => {
    let decodedToken = null;
    if (localStorage.getItem("token") != null) {
      decodedToken = jwtDecode(localStorage.getItem("token"));
    } else {
      navigate("/login");
    }
  }, [navigate]);
  const handleCancelReservation = (reservation) => {
    cancelReservation({
      reservationId: reservation._id,
    });
  };
  const handleActive = (id) => {
    setActive(id);
    if (id == 2) {
      mutate();
    }
  };
  return (
    <div style={{ paddingTop: "100px" }}>
      <Breadcrumb style={{ paddingLeft: "158px" }} separator=">">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
          <span>Home</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/profile">
          <UserOutlined />
          <span style={{ color: "#000000" }}>My Profile</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="center">
        <Col span={19}>
          <Row>
            <Col span={7}>
              <div className={styles.profileContentLeft}>
                <h1
                  style={{
                    color: "#242E52",
                    fontSize: "23px",
                    textAlign: "center",
                    paddingTop: "20px",
                  }}
                >
                  My Account
                </h1>
                <hr
                  style={{
                    width: "80%",
                    textAlign: "center",
                    margin: "0 auto",
                    border: "1.5px solid #ffffff",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                />
                <div style={{ paddingBottom: "10px" }}>
                  <div className={styles.profileLeftName}>
                    <img
                      src={user}
                      style={{ width: "38px", paddingLeft: "10px" }}
                    />
                    <h1
                      style={{
                        color: "#242E52",
                        fontSize: "18px",
                        paddingLeft: "10px",
                        paddingTop: "5px",
                      }}
                    >
                      {decodedToken?.fullName}
                    </h1>
                  </div>
                  <div
                    onClick={() => handleActive(1)}
                    className={
                      active == 1
                        ? styles.profileLeftName2
                        : styles.profileLeftName1
                    }
                  >
                    <img
                      src={history}
                      style={{ width: "22px", marginLeft: "10px" }}
                    />
                    <p
                      style={{
                        color: "#242E52",
                        fontSize: "14px",
                        paddingLeft: "10px",
                      }}
                    >
                      Reservation History
                    </p>
                  </div>
                  <div
                    onClick={() => handleActive(2)}
                    className={
                      active == 2
                        ? styles.profileLeftName4
                        : styles.profileLeftName3
                    }
                  >
                    <img
                      src={logout}
                      style={{ width: "22px", marginLeft: "10px" }}
                    />
                    <p
                      style={{
                        color: "#242E52",
                        fontSize: "14px",
                        paddingLeft: "10px",
                      }}
                    >
                      Log Out
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </Col>
            <Col span={16}>
              <div style={{ marginTop: "28px" }}>
                <h1 style={{ fontSize: "1.3em" }}>Reservation History</h1>
                <hr
                  style={{
                    width: "100%",
                    border: "1.5px solid #ffffff",
                    margin: "13px 0 13px 0",
                  }}
                />
                <div className={styles.profileContentRight}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      src={history}
                      style={{ width: "35px", marginRight: "10px" }}
                    />
                    <h1>{decodedToken?.fullName}</h1>
                  </div>
                  {data?.map((reservation) => (
                    <div>
                      <Descriptions
                        title={
                          <h1
                            style={{ fontSize: "21px", marginBottom: "17px" }}
                          ></h1>
                        }
                        bordered
                      >
                        <Descriptions.Item
                          label={
                            <div className={styles.imageProfile}>
                              <img
                                src={pin1}
                                style={{ width: "21px", marginRight: "10px" }}
                              />
                              <p style={{ fontWeight: "700" }}>Location </p>
                            </div>
                          }
                        >
                          Yummy Pot
                        </Descriptions.Item>
                        <Descriptions.Item
                          label={
                            <div className={styles.imageProfile}>
                              <img
                                src={table1}
                                style={{ width: "20px", marginRight: "10px" }}
                              />
                              <p style={{ fontWeight: "700" }}>Number table </p>
                            </div>
                          }
                        >
                          {reservation.tables[0].table.tableNumber}
                        </Descriptions.Item>
                        <Descriptions.Item
                          label={
                            <div className={styles.imageProfile}>
                              <img
                                src={people1}
                                style={{ width: "20px", marginRight: "10px" }}
                              />
                              <p style={{ fontWeight: "700" }}>Capacity</p>
                            </div>
                          }
                        >
                          {reservation.tables[0].table.capacity}
                        </Descriptions.Item>
                        <Descriptions.Item
                          label={
                            <div className={styles.imageProfile}>
                              <img
                                src={dollar1}
                                style={{ width: "20px", marginRight: "10px" }}
                              />
                              <p style={{ fontWeight: "700" }}>Price </p>
                            </div>
                          }
                        >
                          {reservation.depositAmount.$numberDecimal}$
                        </Descriptions.Item>
                        <Descriptions.Item
                          label={
                            <div className={styles.imageProfile}>
                              <img
                                src={calendar1}
                                style={{ width: "20px", marginRight: "10px" }}
                              />
                              <p style={{ fontWeight: "700" }}>Arrival time </p>
                            </div>
                          }
                          span={2}
                        >
                          {reservation.arrivalTime}
                        </Descriptions.Item>
                        <Descriptions.Item
                          label={
                            <div className={styles.imageProfile}>
                              <img
                                src={table1}
                                style={{ width: "20px", marginRight: "10px" }}
                              />
                              <p style={{ fontWeight: "700" }}>FullName </p>
                            </div>
                          }
                        >
                          {reservation.fullName}
                        </Descriptions.Item>
                        <Descriptions.Item
                          label={
                            <div className={styles.imageProfile}>
                              <img
                                src={table1}
                                style={{ width: "20px", marginRight: "10px" }}
                              />
                              <p style={{ fontWeight: "700" }}>Phone </p>
                            </div>
                          }
                        >
                          {reservation.phone}
                        </Descriptions.Item>
                      </Descriptions>
                      {/* Nếu như đã cancel thì cập nhật lại nút bấm */}
                      {reservation.isCancelled ? (
                        <div>
                          <p
                            style={{
                              marginBottom: "30px",
                              display: "flex",
                              justifyContent: "flex-end",
                              marginTop: "5px",
                              color: "red",
                              fontWeight: "500",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: "500",
                                display: "block",
                                paddingRight: "5px",
                              }}
                            >
                              Note:
                            </p>
                            Your Reservation Has Been Canceled.
                          </p>
                        </div>
                      ) : (
                        <div>
                          {(Date.now() -
                            new Date(
                              reservation.createdAt.split("T")[0]
                            ).getTime()) /
                            3600000 >
                          24 ? (
                            <div
                              style={{
                                marginTop: "20px",
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Button
                                key="approve"
                                type="primary"
                                style={{
                                  background: "rgb(221,214,197)",
                                  color: "black",
                                }}
                                disabled={true}
                              >
                                Out Of Date
                              </Button>
                            </div>
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginTop: "20px",
                              }}
                            >
                              <Button
                                key="approve"
                                type="primary"
                                style={{
                                  background: "rgb(221,214,197)",
                                  color: "black",
                                }}
                                onClick={() =>
                                  handleCancelReservation(reservation)
                                }
                                disabled={
                                  new Date().setHours(
                                    Number(
                                      reservation.tables[0].table.timeRangeType.split(
                                        "h"
                                      )[0]
                                    )
                                  ) -
                                    Date.now() <
                                  61 * 60 * 1000
                                    ? true
                                    : false
                                }
                              >
                                Reject
                              </Button>
                            </div>
                          )}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              marginTop: "10px",
                            }}
                          >
                            <div>
                              <p
                                style={{
                                  marginBottom: "30px",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  marginTop: "5px",
                                  fontWeight: "500",
                                  color: "red",
                                }}
                              >
                                <p
                                  style={{
                                    fontWeight: "500",
                                    display: "block",
                                    paddingRight: "5px",
                                    color: "black",
                                  }}
                                >
                                  Note:
                                </p>
                                You Cannot Cancel The Order Within A 60-minute
                                Time Frame.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default ReservationInfor;
