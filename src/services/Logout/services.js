import { useMutation } from "@tanstack/react-query";
import { logout } from "./caller";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const navigate = useNavigate();
  return useMutation(logout, {
    onSuccess: () => {
      localStorage.removeItem("token");
      notification.success({
        message: "Logout successfully",
      });
      navigate("/");
    },
    onError: () => {
      notification.error({
        message: "Logout failed",
      });
    },
  });
};
