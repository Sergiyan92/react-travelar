import { useState } from "react";
import IButton from "../../IButton/IButton";
import Input from "../../Input/Input";
import { useTranslation } from "react-i18next";

const RegisterForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
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
    setFormData({ name: "", email: "", password: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        className="mb-4"
        label={t("name")}
        placeholder={t("name")}
        onChange={handleChange}
        value={formData.name}
      />
      <Input
        type="email"
        name="email"
        className="mb-4"
        label={t("email")}
        placeholder={t("email")}
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        name="password"
        label={t("password")}
        placeholder={t("password")}
        type="password"
        onChange={handleChange}
        value={formData.password}
      />
      <IButton
        isLoading={isLoading}
        className="mt-10 w-full"
        variant="gradient"
        type="submit"
      >
        {t("create account")}
      </IButton>
    </form>
  );
};

export default RegisterForm;
