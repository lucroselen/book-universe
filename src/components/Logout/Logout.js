import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    authService.logout().then(() => {
      logout();
      navigate("/");
    });
  });

  return null;
};

export default Logout;
