import { Button, Card, Col, Form, Input, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./SignUpForm.module.css";
import login from '../../../../assets/login.png'
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const API_URL = "http://localhost:7070";

  const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });
  const handleFormSubmit = async () => {
    try {
      const response = await api.post("/register", {
        email,
        phone,
        password,
        confirmPassword,
        fullName,
      });
      navigate("/login");
      // Handle successful login here, such as storing tokens in local storage or Redux state
    } catch (error) {
      // Handle error, such as displaying an error message to the user
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error.message;
        form.setFields([
          {
            name: ["user", "email"],
            errors: [errorMessage],
          },
        ]);
      }
    }
  };

  const validatePassword = (_, value) => {
    if (!value) {
      return Promise.reject('Please input your password!');
    }
    if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(value)) {
      return Promise.reject('Password must contain at least one uppercase letter (A-Z), one digit, and be at least 8 characters long.');
    }

    return Promise.resolve();
  };
  return (
    <Row className={style.daddyContainer}>
      <Col span={12}>
        <Link to="/">
          <img src={login} style={{ width: '750px', minHeight: 'calc(100vh - 3px)' }} />
        </Link>
      </Col>
      <Col span={12}>
        <div className={style.container}>
          <Card
            hoverable
            bordered={false}
            style={{
              width: 600,
            }}
            cover={
              <img
                alt="signup"
                src="https://png.pngtree.com/illustrations/20190325/ourlarge/pngtree-winter-warm-hot-pot-food-png-image_37651.jpg"
              />
            }
          >
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
              onFinish={handleFormSubmit}
            >
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    validator: validatePassword,
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="fullName"
                label="Fullname"
                rules={[
                  {
                    required: true,
                    message: "Please input your fullname!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Item>
              <Form.Item  {...tailFormItemLayout}>
                <Button  htmlType="submit" className={style.formButton}>
                  Register
                </Button>
              </Form.Item>
              <div className={style.loginNowTagLink}>
                <span>Already have account!</span>
                <Link to="/login">&nbsp;Login Now!</Link>
              </div>
            </Form>
          </Card>
        </div>
      </Col>
        <style>
        {`
        :where(.css-dev-only-do-not-override-lbcgob) .ant-btn-default:not(:disabled):hover {
          color: #ffffff;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #EF4949 !important;
          border-color: #EF4949 !important; 
        }
        
        .ant-checkbox-inner {
          background-color: #f0f0f0 !important; 
          border-color: #d9d9d9 !important;
        }
        `}
      </style>
    </Row>
  );
};
export default SignUpForm;
