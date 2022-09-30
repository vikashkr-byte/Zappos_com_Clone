import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContex/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isAuth) {
    return navigate("/signin");
  }
  return children;
};

export default PrivateRoutes;
