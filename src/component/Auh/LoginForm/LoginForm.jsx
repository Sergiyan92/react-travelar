import { useState } from "react";
import Input from "../../Input/Input";
import IButton from "../../IButton/IButton";
import { useTranslation } from "react-i18next";

const LoginForm = ({ onSubmit,isLoading }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ email: "", password: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        className="mb-4"
        name="email"
        label={t("email")}
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="test@test.com"
      />
      <Input
        value={formData.password}
        label={t("password")}
        name="password"
        onChange={handleChange}
        type="password"
        placeholder={t("password")}
      />
      <IButton className="mt-10 w-full" variant="gradient" type="submit" isLoading={isLoading}>
        {t('signin')}
      </IButton>
    </form>
  );
};

export default LoginForm;
