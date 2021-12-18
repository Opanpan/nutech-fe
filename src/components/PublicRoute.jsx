import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utils";

export default function PublicRoute({ children }) {
  return isLogin() ? <Navigate to="/dashboard" /> : children;
}
