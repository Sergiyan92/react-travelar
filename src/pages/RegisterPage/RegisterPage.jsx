import { useNavigate } from "react-router-dom";
import RegisterForm from "../../component/Auh/RegisterForm/RegisterForm";
import { useMutation } from "../../custom-hook/useMutation";
import { authService } from "../../api/authService";

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    mutation: handleRegisterUser,
  } = useMutation({
    mutationFn: (data) => authService.registerUser(data),
    onSuccess: () => navigate("/map"),
  });
  return (
    <>
      {error && <div className="text-red-500">{error.message}</div>}
      <RegisterForm onSubmit={handleRegisterUser} isLoading={isLoading} />
    </>
  );
};

export default RegisterPage;
