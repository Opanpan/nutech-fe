import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utils";

export default function PrivateRoute({ children }) {
  return isLogin() ? children : <Navigate to="/" />;
}
