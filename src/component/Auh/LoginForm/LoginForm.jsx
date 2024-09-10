import { useState } from "react";
import Input from "../../Input/Input";
import IButton from "../../IButton/IButton";

const LoginForm = ({ onSubmit,isLoading }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
        label="Електронна пошта"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Електронна пошта"
      />
      <Input
        value={formData.password}
        label="Пароль"
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Пароль"
      />
      <IButton className="mt-10 w-full" variant="gradient" type="submit" isLoading={isLoading}>
        Логін
      </IButton>
    </form>
  );
};

export default LoginForm;
