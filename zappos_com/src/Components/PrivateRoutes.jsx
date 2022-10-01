import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContex/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      return navigate("/signin");
    }
  }, [])
  
  return children;
  
};

export default PrivateRoutes;
