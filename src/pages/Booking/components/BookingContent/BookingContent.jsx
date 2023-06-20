import { Button, Form, Input, Select, Space } from "antd";
import calendar from "../../../../assets/calendar.png";
// import paypal from "../../../../assets/paypal.png";
import dollar from "../../../../assets/dollar.png";
import address from "../../../../assets/pin.png";
import people from "../../../../assets/people.png";
import styles from "./BookingContent.module.css";
import { Option } from "antd/es/mentions";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useReservation } from "../../../../services/Reservation/services";

const BookingContent = () => {

  const { mutate } = useReservation();
  const location = useLocation();
  const { selectedTable } = location.state;
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  console.log(selectedTable);
  const tables = [
    {
      _id: selectedTable?._id,
      depositAmount: {
        $numberDecimal: "10",
      }
    }
  ];

  const handleFormSubmit = () => {
    try {
      mutate({
        customerId: decodedToken?.customerId,
        tables: tables,
        arrivalTime: "20-06-2023" + selectedTable?.depositPrice.$numberDecimal,
      });
    } catch (error) {
      console.error(error);
    }
  };

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

  const handlePayment = async () => {
    try {
      // Make a request to your backend API to initiate the PayPal payment
      const response = await axios.post("http://localhost:7070/payment/init", {
        amount: 10.0, // Example amount
        currency: "USD", // Example currency
        itemName: "Yummy Pot table reservation", // Example item name
      });

      // Redirect the user to the PayPal payment approval URL
      window.location.href = response.data.approvalUrl;
    } catch (error) {
      console.error("Failed to initiate PayPal payment:", error);
      // Handle error
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Form layout="vertical" onFinish={handleFormSubmit} initialValues={decodedToken}>
        <h1 style={{ paddingTop: "90px", color: "#ffffff" }}>
          Please check your reservation information
        </h1>
        <div className={styles.bookingContent}>
          <div className={styles.bookingDetail}>
            <img style={{ width: "27px" }} src={address} alt="address" />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                padding: "5px 0 0 7px",
              }}
            >
              Yummy Pot
            </p>
          </div>

          <div className={styles.bookingDetail}>
            <img style={{ width: "25px" }} src={people} alt="people" />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                padding: "5px 0 0 7px",
              }}
            >
              Table for {selectedTable?.capacity} people
            </p>
          </div>
          <div className={styles.bookingDetail}>
            <img style={{ width: "25px" }} src={calendar} alt="calendar" />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                padding: "5px 0 0 7px",
              }}
            >
              20/06/2023, {selectedTable?.timeRangeType}
            </p>
          </div>
          <div className={styles.bookingDetail}>
            <img style={{ width: "27px" }} src={dollar} alt="address" />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                padding: "5px 0 0 7px",
              }}
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
        <div className={styles.bookingContent1}>
          <div className={styles.bookingDetail}>
            <Form.Item
              name="name"
              label={<span style={{ color: "#BD8E2E" }}>Full Name</span>}
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
              name="arrivaltime"
              label={<span style={{ color: "#BD8E2E" }}>Arrival Time</span>}
              rules={[
                {
                  required: true,
                  message: "Please input your arrival time!",
                  whitespace: true,
                },
              ]}
              style={{ paddingLeft: "38px" }}
            >
              <Input
                size="large"
                style={{ width: "420px" }}
                defaultValue={"20-06-2023 " + selectedTable?.timeRangeType}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="phone"
              label={<span style={{ color: "#BD8E2E" }}>Phone Number</span>}
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
