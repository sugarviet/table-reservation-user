import { Layout, Button, Input, Tooltip } from "antd";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import styles from "./Navbar.module.css";

import useNavbar from "./hooks/useNavbar";
import Drawer from "./components/Drawer";

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const {
    isDrawerVisible,
    handleShowDrawable,
    hideDrawer,
    isShowSearchBar,
    handleShowSearchBar,
  } = useNavbar();

  return (
    <Layout>
      <Header className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLogo}>
            <Link to={"/"} className={styles.whiteText}><img className={styles.logo} src={logo}/></Link>
          </div>
          <div className={styles.navbarAction}>
            <ul className={styles.navbarActionList}>
              <li>
                <Link to={'/login'}>
                  <Button>Login</Button>
                </Link>
              </li>
            </ul>
            <Button
              icon={<MenuOutlined />}
              className={styles.navbarMenu}
              onClick={handleShowDrawable}
            />
          </div>
        </div>
      </Header>

      {/* Show when hit button search */}
      <div
        className={isShowSearchBar ? styles.navbarSearchBar : styles.invisible}
      >
        <Search allowClear placeholder="Search something ..." />

        <Tooltip placement="bottom" title={"Close search"}>
          <Button
            icon={<CloseOutlined />}
            shape="circle"
            onClick={handleShowSearchBar}
          />
        </Tooltip>
      </div>

      {/* Show menu when on mobile's screen */}
        <Drawer isDrawerVisible={isDrawerVisible} hideDrawer={hideDrawer}/>
    </Layout>
  );
};

export default Navbar;
