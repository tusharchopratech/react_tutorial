import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../settings/AuthUtils";
const auth = new AuthService();

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    auth.logout();
    navigate("/");
  });
  return <div></div>;
}

export default Logout;