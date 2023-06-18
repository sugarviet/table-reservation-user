import { Drawer as AntdDrawer, Menu } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { UserOutlined, HomeOutlined } from "@ant-design/icons";

const MENU_ARR = [
  {
    id: 1,
    link: "/",
    title: "Home",
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    link: "/",
    title: "About us",
    icon: <UserOutlined />,
  },
  {
    id: 3,
    link: "/",
    title: "Products",
    icon: <UserOutlined />,
  },
  {
    id: 4,
    link: "/",
    title: "Page",
    icon: <UserOutlined />,
  },
  {
    id: 5,
    link: "/",
    title: "Contact us",
    icon: <UserOutlined />,
  },
];

const Drawer = ({ hideDrawer, isDrawerVisible }) => {
  return (
    <div>
      <AntdDrawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={hideDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical">
          {MENU_ARR.map((item) => (
            <Menu.Item key={item.id} icon={item.icon}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </AntdDrawer>
    </div>
  );
};

Drawer.propTypes = {
  hideDrawer: PropTypes.func.isRequired,
  isDrawerVisible: PropTypes.bool.isRequired,
};


export default Drawer;
