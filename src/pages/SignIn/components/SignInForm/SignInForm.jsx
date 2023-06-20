import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import style from "./SignInForm.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import login from '../../../../assets/login.png'
import { useLogin } from "../../../../services/Login/services";

const SignInForm = () => {

  const { mutate } = useLogin();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = () => {
    try {
      mutate({ phone, password });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row>
      <Col span={12}>
        <Link to="/">
          <img src={login} style={{ width: '750px' }} />
        </Link>
      </Col>
      <Col span={12}>
        <div className={style.container}>
          <Card
            className={style.cardSignInForm}
            hoverable
            style={{
              width: 450,
            }}
            cover={
              <img
                alt="example"
                src="https://m.media-amazon.com/images/G/01/Lagoon/AssetLibrary/MyAccount/Login/Banner_Mobile_US_Login10.png"
              />
            }
          >
            <Form
              name="normal_login"
              className={style.signInForm}
              initialValues={{
                remember: true,
              }}
              onFinish={handleFormSubmit}
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={style.formButton}
                >
                  Log in
                </Button>
              </Form.Item>
              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Link className={style.loginRegisterTagLink} to="/signup">
                      Register now!
                    </Link>
                    <a className={style.loginForgot} href="">
                      Forgot password
                    </a>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default SignInForm;
