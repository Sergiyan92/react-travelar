import { useState } from "react";
import LoginForm from "../../component/Auh/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/user";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginUser = async (data) => {
    setIsLoading(true);
    try {
      await login(data);
      navigate("/map");
    } catch (error) {
      console.error(error);
    }finally{
      setIsLoading(false)
    }
  };
  return <LoginForm onSubmit={handleLoginUser} isLoading={isLoading}/>;
};
export default LoginPage;
