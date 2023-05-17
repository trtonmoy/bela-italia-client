import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Pages/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { loader, user } = useContext(AuthContext);
  const location = useLocation();

  if(loader) {
    return <Spinner></Spinner>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
