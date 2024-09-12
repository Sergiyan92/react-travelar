import { useNavigate } from "react-router-dom";
import { logout } from "../../api/user";
import { useMutation } from "../../custom-hook/useMutation";
import LogoutIcon from "./LogoutIcon.svg";
import { authService } from "../../api/authService";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { mutation: logoutUser, isLoading } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      authService.clearToken();
      navigate("/auth/login");
    },
  });
  return (
    <button
      className="flex gap-2 items-center px-6 text-black"
      onClick={logoutUser}
    >
      {isLoading && <span>Loading...</span>}
      Вихід <img src={LogoutIcon} alt="LogoutIcon" />
    </button>
  );
};

export default LogoutButton;
