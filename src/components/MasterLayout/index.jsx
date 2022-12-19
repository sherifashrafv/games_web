import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Nav/index";

export default function MasterLayOut({ userData, logOut }) {
  return (
    <>
      <NavBar logOut={logOut} userData={userData} />
      <Outlet></Outlet>
    </>
  );
}
