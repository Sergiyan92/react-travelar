import {  useState } from "react";
import Input from "../../Input/Input";
import IButton from "../../IButton/IButton";
import FormContainer from "../FormContainer";

const LoginForm = ({ onSubmit }) => {
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
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        className="mb-4"
        name="email"
        label="Електронна пошта"
        value={formData.email}
        onChange={handleChange}
        type="email"
      />
      <Input
        value={formData.password}
        label="Пароль"
        name="password"
        onChange={handleChange}
        type="password"
      />
      <IButton className="mt-10 w-full" variant="gradient" type="submit">
        Логін
      </IButton>
    </FormContainer>
  );
};

export default LoginForm;
