import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext";

const Logout = () => {
  const { addNotification } = useNotificationContext();

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logout();
        navigate("/");
      })
      .then(() => addNotification("Logout successful!", "alert-success"));
  });

  return null;
};

export default Logout;
