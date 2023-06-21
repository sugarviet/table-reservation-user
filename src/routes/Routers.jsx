import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Booking from "../pages/Booking";
import Profile from "../pages/Profile";
import Success from "../components/Success/Success";
const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};
export default Routers;
