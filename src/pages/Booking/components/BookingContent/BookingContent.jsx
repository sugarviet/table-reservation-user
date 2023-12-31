import { Button, Form, Input, Select, Space } from "antd";
import calendar from "../../../../assets/calendar.png";
// import paypal from "../../../../assets/paypal.png";
import { Option } from "antd/es/mentions";
import axios from "axios";
import { useState } from "react";
import { redirect, useLocation } from "react-router-dom";
import styles from "./BookingContent.module.css";
import jwtDecode from "jwt-decode";
import dollar from "../../../../assets/dollar.png";
import people from "../../../../assets/people.png";
import address from "../../../../assets/pin.png";
import { useReservation } from "../../../../services/Reservation/services";
import Loading from "../../../../components/Loading/Loading";

const BookingContent = () => {
  const { mutate } = useReservation();
  const location = useLocation();
  const { selectedTable } = location.state;
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const [isLoading, setIsLoading] = useState(false);
  const currentDate = new Date(Date.now());
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();

  const formattedDate = `${day}/${month}/${year}`;
  const tables = [
    {
      _id: selectedTable?._id,
      depositAmount: {
        $numberDecimal: selectedTable?.depositPrice.$numberDecimal,
      },
    },
  ];

  const handleFormSubmit = async (value) => {
    setIsLoading(true);
    try {
      await handlePayment({
        customerId: decodedToken?.customerId,
        tables: tables,
        fullName: value.fullName,
        phoneReserve: value.phone,
        arrivalTime: value.arrivalTime,
      });
      redirect("/");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
        defaultValue="+84"
      >
        <Option value="86">+84</Option>
      </Select>
    </Form.Item>
  );

  const handlePayment = async ({
    customerId,
    tables,
    arrivalTime,
    fullName,
    phoneReserve,
  }) => {
    try {
      // Make a request to your backend API to initiate the PayPal payment
      const response = await axios.post(
        "http://localhost:7070/payment/init",
        {
          amount: tables[0].depositAmount.$numberDecimal, // Example amount
          currency: "USD", // Example currency
          itemName: "Yummy Pot table reservation", // Example item name
          tables,
          fullName,
          phoneReserve,
          arrivalTime,
        },
        {
          withCredentials: true,
        }
      );
      // Redirect the user to the PayPal payment approval URL
      window.location.href = response.data.approvalUrl;
    } catch (error) {
      console.error("Failed to initiate PayPal payment:", error);
      // Handle error
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Form
        layout="vertical"
        onFinish={handleFormSubmit}
        initialValues={{
          ...decodedToken,
          arrivalTime: selectedTable?.timeRangeType,
        }}
      >
        <h1 style={{ paddingTop: "90px", color: "#ffffff" }}>
          Please check your reservation information
        </h1>
        <div className={styles.bookingContent}>
          <div className={styles.bookingDetail}>
            <img style={{ width: "27px" }} src={address} alt="address" />
            <p
              className={styles.bookingDetailTitle}
            >
              Yummy Pot
            </p>
          </div>

          <div className={styles.bookingDetail}>
            <img style={{ width: "25px" }} src={people} alt="people" />
            <p
              className={styles.bookingDetailTitle}
            >
              Table for {selectedTable?.capacity} people
            </p>
          </div>
          <div className={styles.bookingDetail}>
            <img style={{ width: "25px" }} src={calendar} alt="calendar" />
            <p
              className={styles.bookingDetailTitle}
            >
              {formattedDate}
            </p>
          </div>
          <div className={styles.bookingDetail}>
            <img style={{ width: "27px" }} src={dollar} alt="address" />
            <p
              className={styles.bookingDetailTitle}
            >
              {selectedTable?.depositPrice.$numberDecimal}$
            </p>
          </div>
        </div>

        <h1
          style={{
            paddingTop: "20px",
            color: "#ffffff",
            fontSize: "18px",
            marginRight: "300px",
          }}
        >
          Please provide the contact information used to make your reservation:
        </h1>
        <div style={{ position: "relative" }}>
          {isLoading && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              {/* Add your loading spinner or animation here */}
              <Loading />
            </div>
          )}
          {/* Form content */}
        </div>
        <div className={styles.bookingContent1}>
          <div className={styles.bookingDetail}>
            <Form.Item
              name="fullName"
              label={<span className={styles.bookingTitleUser}>Full Name</span>}
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                size="large"
                style={{ width: "420px" }}
                defaultValue={decodedToken?.fullName}
              />
            </Form.Item>
            <Form.Item
              name="arrivalTime"
              label={<span className={styles.bookingTitleUser}>Arrival Time</span>}
              rules={[
                {
                  message: "Please input your arrival time!",
                  whitespace: true,
                },
              ]}
              style={{ paddingLeft: "38px" }}
            >
              <Input
                size="large"
                style={{ width: "420px" }}
                defaultValue={selectedTable?.timeRangeType}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="phone"
              label={<span className={styles.bookingTitleUser}>Phone Number</span>}
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
              
                addonBefore={prefixSelector}
                style={{
                  width: "48%",
                }}
                size="large"
                defaultValue={decodedToken?.phone}
              />
            </Form.Item>
          </div>
          <p>
            <span style={{ color: "#ff4d4f", fontSize: "20px" }}>* </span>is a
            required field, you must enter it completely.
          </p>
        </div>

        <div className={styles.bookingContent1}>
          <Space wrap>
            <Button
              htmlType="submit"
              className={styles.bookingBook}
              type="primary"
              // onClick={handlePayment}
            >
              Booking now
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default BookingContent;
