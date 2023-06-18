import { Fragment } from "react"
import Navbar from "../Navbar";
import Routers from "../../routes/Routers";

import useLayout from "./hooks/useLayout";

const Layout = () => {
  const {isSignInAndSignUpPath} = useLayout();

  return (
    <Fragment>
      {isSignInAndSignUpPath && <Navbar/>}
        <div>
            <Routers />
        </div>
    </Fragment>
  )
}

export default Layout
