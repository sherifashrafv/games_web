import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import MasterLayOut from "./components/MasterLayout";
import "./index.css";
import Home from "./components/home/index.jsx";
import All from "./components/all/index.jsx";
import Pc from "./components/pc/index.jsx";
import Browser from "./components/browser/index.jsx";
import ReleaseDate from "./components/realsedate/index.jsx";
import Popularity from "./components/popularity/index.jsx";
import Alphabetical from "./components/alphabetical";
import Relevance from "./components/relevance";
import Racing from "./components/racing";
import Sports from "./components/sports/index.jsx";
import Social from "./components/social";
import Shooter from "./components/shooter/index.jsx";
import OpenWorld from "./components/openWorld";
import Zombie from "./components/zombie/index.jsx";
import LogIn from "./components/login/index.jsx";
import NotFound from "./components/notfound/index.jsx";
import SignUp from "./components/signUp/index.jsx";
import ProtectedRoute from "./components/protectedRoute/index.jsx";
import Details from "./components/details/index";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
function App() {
  const [userData, setUserData] = useState(null);
  let saveUserData = () => {
    let encodedToken = localStorage.getItem("token");
    let decodeToken = jwtDecode(encodedToken);
    setUserData(decodeToken);
  };
  let LogOut = () => {
    localStorage.removeItem("token");
    setUserData(null);
    return <Navigate to="/login" />;
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, []);
  let routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayOut logOut={LogOut} userData={userData} />,
      children: [
        { path: "", index: true, element: <Home /> },
        { path: "/all", element: <All /> },
        { path: "/pc", element: <Pc /> },
        { path: "/browser", element: <Browser /> },
        { path: "/release-date", element: <ReleaseDate /> },
        { path: "/popularity", element: <Popularity /> },
        { path: "/alphabetical", element: <Alphabetical /> },
        { path: "/Relevance", element: <Relevance /> },
        { path: "/Racing", element: <Racing /> },
        { path: "/Sports", element: <Sports /> },
        { path: "/Social", element: <Social /> },
        { path: "/Shooter", element: <Shooter /> },
        { path: "/open-world", element: <OpenWorld /> },
        { path: "/details/:id", element: <Details /> },
        {
          path: "/signUp",
          element: (
            <ProtectedRoute userData={userData}>
              <SignUp />
            </ProtectedRoute>
          ),
        },
        { path: "/zombie", element: <Zombie /> },
        {
          path: "/Login",
          element: (
            <ProtectedRoute userData={userData}>
              <LogIn saveUserData={saveUserData} />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
