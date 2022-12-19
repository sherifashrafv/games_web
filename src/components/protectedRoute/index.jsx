import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ userData, children }) {
  if ((userData == null) & (localStorage.getItem("token") == null)) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}
