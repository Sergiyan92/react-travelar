import { useState } from "react";
import FavoritePlace from "../FavoritPlace/FavoritPlace";
import IButton from "../IButton/IButton";
import Input from "../Input/Input";

const FavoritePlaces = ({ label, list, children }) => {
  const [buttonVariant, setButtonVariant] = useState("gradient");

  const changeButtonVariant = () => {
    setButtonVariant((prevVariant) =>
      prevVariant === "gradient" ? "outlined" : "gradient"
    );
  };

  return (
    <div className="px-6">
      <div className="text-gray mb-4">Додані маркери</div>
      <div className="py-5">
        <Input label="Some label" />
        <a href="/" className="text-black">
          CLick me
        </a>
      </div>
      {label}
      {list &&
        [...Array(4)].map((_, index) => {
          <li key={index}>
            <FavoritePlace />
          </li>;
        })}

      {children}
      <IButton
        className="w-full mt-10"
        variant={buttonVariant}
        onClick={changeButtonVariant}
      >
        Додати маркер
      </IButton>
    </div>
  );
};

export default FavoritePlaces;
