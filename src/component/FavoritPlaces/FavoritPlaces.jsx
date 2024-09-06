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

  const handleKeyDown = (event) => {
    if (event.altKey && event.key === "Enter") {
      console.log("alt pressed");
    }
  };

  return (
    <div
      className="px-6"
      onClick={() => console.log("click1")}
      onKeyDown={handleKeyDown}
      tabIndex="0" // Додає фокус для обробки події keydown
    >
      <div
        className="text-gray mb-4"
        onClick={(e) => {
          e.stopPropagation();
          console.log("click2");
        }}
      >
        Додані маркери
      </div>
      <div className="py-5">
        <Input label="Some label" />
        <a
          href="/"
          className="text-black"
          onClick={(e) => {
            e.preventDefault();
            console.log("prevented");
          }}
        >
          Click me
        </a>
      </div>
      {/* Слот для label */}
      {label && <div>{label}</div>}
      {/* Слот для списку або рендеринг елементів FavoritePlace */}
      {list
        ? list
        : [...Array(4)].map((_, index) => <FavoritePlace key={index} />)}
      {/* Основний слот */}
      {children}
      {/* Кнопка з динамічним варіантом */}
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
