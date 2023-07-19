import { Button, Input, Layout, Tooltip, Dropdown } from "antd";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.css";
import Drawer from "./components/Drawer";
import useNavbar from "./hooks/useNavbar";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../services/Logout/services";

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useLogOut();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken) {
        setLoggedIn(true);
      }
    }
  }, []);

  const logout = () => {
    mutate();
    setLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
  };
  const items = [
    {
      label: <Link to="/profile">My Profile</Link>,
      key: "0",
    },

    {
      type: "divider",
    },
    {
      label: <div onClick={logout}>Log Out</div>,
      key: "2",
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
            <Link to={"/"} className={styles.whiteText}>
              <img className={styles.logo} src={logo} />
            </Link>
          </div>
          <div className={styles.navbarAction}>
            <ul className={styles.navbarActionList}>
              <li>
                {loggedIn ? (
                  <Dropdown
                    placement="bottom"
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <img
                        src={profile}
                        style={{ width: "40px", marginTop: "25px" }}
                      />
                    </a>
                  </Dropdown>
                ) : (
                  <Link to={"/login"}>
                    <Button>Login</Button>
                  </Link>
                )}
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
