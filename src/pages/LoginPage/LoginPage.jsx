import LoginForm from "../../component/Auh/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { useMutation } from "../../custom-hook/useMutation";
import { authService } from "../../api/authService";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    mutation: handleLoginUser,
  } = useMutation({
    mutationFn: (data) => authService.login(data),
    onSuccess: () => navigate("/map"),
  });

  return (
    <>
      {error && <div className="text-red-500">{error.message}</div>}
      <LoginForm onSubmit={handleLoginUser} isLoading={isLoading} />
    </>
  );
};
export default LoginPage;
