import { Button, Input, Layout, Tooltip, Dropdown } from "antd";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
import {
  CloseOutlined,
  MenuOutlined
} from "@ant-design/icons";
import styles from "./Navbar.module.css";
import Drawer from "./components/Drawer";
import useNavbar from "./hooks/useNavbar";

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {

  const items = [
    {
      label: <Link to='/profile'>My Profile</Link>,
      key: '0',
    },

    {
      type: 'divider',
    },
    {
      label: <Link to='/profile'>Log Out</Link>,
      key: '2',
    },
  ];
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
            <Link to={"/"} className={styles.whiteText}><img className={styles.logo} src={logo} /></Link>
          </div>
          <div className={styles.navbarAction}>
            <ul className={styles.navbarActionList}>
              <li>
                {/* <Link to={'/login'}>
                  <Button>Login</Button>
                </Link> */}
                <Dropdown
                  placement="bottom"
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <img src={profile} style={{ width: '40px', marginTop: '25px' }} />
                  </a>
                </Dropdown>
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
      <Drawer isDrawerVisible={isDrawerVisible} hideDrawer={hideDrawer} />
    </Layout>
  );
};

export default Navbar;
