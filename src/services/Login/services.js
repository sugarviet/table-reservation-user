import { useMutation } from "@tanstack/react-query";
import { login } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      notification.success({
        message: "Login successfully",
      });
      navigate("/");
    },
    onError: (error) => {
      if (error.response.status === 404) {
        return notification.error({
          message: error.response.data.message,
        });
      }
      notification.error({
        message: "Login failed",
      });
    },
  });
};
