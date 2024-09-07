import { useState } from "react";
import IButton from "../../IButton/IButton";
import Input from "../../Input/Input";
import FormContainer from "../FormContainer";

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
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
    setFormData({ name: "", email: "", password: "" });
  };
  return (
    <FormContainer
      className="max-w-[500px] w-full bg-white p-10 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <Input
        name="name"
        className="mb-4"
        label="Повне ім’я"
        placeholder="Повне ім’я"
        onChange={handleChange}
        value={formData.name}
      />
      <Input
        type="email"
        name="email"
        className="mb-4"
        label="Електронна пошта"
        placeholder="email@gmail.com"
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        name="password"
        label="Пароль"
        placeholder="Пароль"
        type="password"
        onChange={handleChange}
        value={formData.password}
      />
      <IButton className="mt-10 w-full" variant="gradient" type="submit">
        Створити аккаунт
      </IButton>
    </FormContainer>
  );
};

export default RegisterForm;
