import { NavLink, Outlet } from "react-router-dom";
import BaseLayout from "../../component/BaseLoyout/BaseLayout";

const AuthPage = () => {
  return (
    <BaseLayout>
      <section className="w-full bg-white p-10 rounded-2xl">
        <div className="flex justify-center gap-10 mb-10">
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray"
            }
          >
            Увійти
          </NavLink>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray"
            }
          >
            Реєстрація
          </NavLink>
        </div>
        <Outlet />
      </section>
    </BaseLayout>
  );
};
export default AuthPage;

