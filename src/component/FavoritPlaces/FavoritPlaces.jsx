import FavoritePlace from "../FavoritPlace/FavoritPlace";
import IButton from "../IButton/IButton";

const FavoritePlaces = ({ lable, list, children }) => {
  return (
    <div className="px-6">
      <div className="text-gray mb-4">Додані маркери</div>
      {lable && <div>{lable}</div>}

      {list
        ? list
        : [...Array(4)].map((_, index) => <FavoritePlace key={index} />)}
      {children}
      <IButton className="w-full mt-10">Додати маркер</IButton>
    </div>
  );
};

export default FavoritePlaces;
