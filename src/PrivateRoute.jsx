import { Navigate } from "react-router-dom";
import { authService } from "./api/authService";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggetIn = authService.isLoggedIn()
  return isLoggetIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
