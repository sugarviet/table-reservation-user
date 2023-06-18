import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";

import style from "./SignInForm.module.css";
import { onFinish } from "../../hooks/useSignInForm";

const SignInForm = () => {
  onFinish;
  return (
    <div className={style.container}>
      <Card
        className={style.cardSignInForm}
        hoverable
        style={{
          width: 600,
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
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
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
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Row>
            <Col span={24}>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className={style.loginForgot} href="">
                  Forgot password
                </a>
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
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignInForm;
