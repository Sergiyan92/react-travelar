import { NavLink, Outlet } from "react-router-dom";
import BaseLayout from "../../component/BaseLoyout/BaseLayout";
import LanguageSwitcher from "../../component/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
  const { t } = useTranslation();
  return (
    <BaseLayout>
      <section className="w-full bg-white p-10 rounded-2xl">
        <LanguageSwitcher />
        <div className="flex justify-center gap-10 mb-10">
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray"
            }
          >
            {t("signin")}
          </NavLink>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray"
            }
          >
            {t("create account")}
          </NavLink>
        </div>
        <Outlet />
      </section>
    </BaseLayout>
  );
};
export default AuthPage;
