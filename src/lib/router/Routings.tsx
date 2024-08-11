/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @note
 * for hook alternative of route element composition:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#use-useroutes-instead-of-react-router-config
 * - https://reactrouter.com/docs/en/v6/examples/route-objects
 *
 * might need to take notes on:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
 */

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { userRoutes } from "./routes";
import RequireAuth from "../components/auth/RequireAuth";
import Page404 from "../pages/404";
// import { useIsConnectionRestored } from "@tonconnect/ui-react";
import { useEffect } from "react";
// import RequireNotAuth from "../components/auth/RequireNotAuth";

const Routings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <Routes>
        {userRoutes.map(({ element, ...userRouteProps }) => (
          <Route
            element={<RequireAuth redirectTo={`/home`}>{element}</RequireAuth>}
            {...userRouteProps}
            key={`userRoute-${userRouteProps.path}`}
          />
        ))}
        {/* {routes.map(({ element, ...routeProps }) => (
          <Route
            element={<RequireNotAuth>{element}</RequireNotAuth>}
            {...routeProps}
            key={`route-${routeProps.path}`}
          />
        ))} */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Routings;
