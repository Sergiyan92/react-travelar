import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const GreetingPage = lazy(() => import("./pages/GreetingPage/GreetingPage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route
          path="/map"
          element={
            <PrivateRoute component={<HomePage />} redirectTo="/auth/login" />
          }
        />
        <Route path="/auth" element={<AuthPage />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route
            path="login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/map" />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/map" />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
