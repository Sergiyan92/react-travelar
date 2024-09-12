
import { Navigate } from "react-router-dom";
import { authService } from "./api/authService";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggetIn = authService.isLoggedIn()

  return isLoggetIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
