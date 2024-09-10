import { useNavigate } from "react-router-dom";
import RegisterForm from "../../component/Auh/RegisterForm/RegisterForm";
import { registerUser } from "../../api/user";
import { useState } from "react";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegisterUser = async (data) => {
    setIsLoading(true);
    try {
      await registerUser(data);
      navigate("/map");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return <RegisterForm onSubmit={handleRegisterUser} isLoading={isLoading} />;
};

export default RegisterPage;
