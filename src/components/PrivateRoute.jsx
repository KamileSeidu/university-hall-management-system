import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  //   console.log(token);

  // If the user has a valid token, render the child components (Outlet)
  // Otherwise, redirect the user to the login page
  return token ? (
    children
  ) : (
    // <Outlet />
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default PrivateRoute;
