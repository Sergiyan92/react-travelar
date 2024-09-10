import FavoritePlace from "../FavoritPlace/FavoritPlace";
import IButton from "../IButton/IButton";

const FavoritePlaces = ({ items, activeId, onPlaceClicked }) => {
  return (
    <div className="px-6 text-black">
      <div className="text-gray mb-4">Додані маркери</div>
      <ul>
        {items?.length === 0 && <div>Список порожній</div>}
        {items?.map((item) => {
          return (
            <li key={item.id}>
              <FavoritePlace
                title={item.title}
                description={item.description}
                img={item.img}
                isActive={item.id === activeId}
                onClick={() => onPlaceClicked(item.id)}
              />
            </li>
          );
        })}
      </ul>

      <IButton className="w-full mt-10" variant="gradient">
        Додати маркер
      </IButton>
    </div>
  );
};

export default FavoritePlaces;
