import IButton from "../../component/IButton/IButton";
import markerIcon from "../../assets/img/map-pin.svg";
import BaseLayout from "../../component/BaseLoyout/BaseLayout";
import LanguageSwitcher from "../../component/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const GreetingPage = () => {
  const { t } = useTranslation();
  return (
    <BaseLayout>
      <LanguageSwitcher />
      <div className="text-white text-center">
        <img className="inline mb-6" src={markerIcon} alt="Marker icon" />
        <h1 className="font-bold text-4xl mb-7">IT traveler</h1>
        <p className="leading-6 mb-11">{t("text greeting")}</p>
        <IButton to="/auth/register">{t("greeting button")}</IButton>
      </div>
    </BaseLayout>
  );
};
export default GreetingPage;
