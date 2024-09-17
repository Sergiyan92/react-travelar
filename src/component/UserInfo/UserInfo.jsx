import { useEffect } from "react";
import { getUserInfo } from "../../api/user";
import { useMutation } from "../../custom-hook/useMutation";
import LogoutButton from "../LogoutButton/LogoutButton";
import UserIcon from "./UserIcon.svg";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const UserInfo = () => {
  const { data: userInfo, mutation: getUser } = useMutation({
    mutationFn: () => getUserInfo(),
  });

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-[#ffe6dc] border-primary pt-2">
      <LanguageSwitcher />
      <div className="flex sticky top-0 items-center justify-between text-black gap-3 bg-[#ffe6dc] border-solid border-b-2 border-primary rounded-bl-2xl rounded-br-2xl px-6 py-4 mb-10">
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full color-primary bg-primary">
            <img src={UserIcon} className="text-white " />
          </div>
          {userInfo ? (
            <span className="ml-2">{userInfo.data.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default UserInfo;
