import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? <Wrapper>{component}</Wrapper> : <Navigate to="/" />;
};

export default PrivateRoute;
