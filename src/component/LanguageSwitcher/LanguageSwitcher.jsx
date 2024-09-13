import { useTranslation } from "react-i18next";
import EnglishIcon from "./InglishIcon.svg";
import UkraineIcon from "./UkraineIcon.svg";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex gap-2 pl-2 mb-2 justify-center">
      <button onClick={() => handleChangeLanguage("en")}>
        <img src={EnglishIcon} className="w-[30px] h-[15px]" />
      </button>
      <button onClick={() => handleChangeLanguage("ua")}>
        <img src={UkraineIcon} alt="" className="w-[30px] h-[15px]" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
