import FavoritPlaceIconButton from "./FavoritPlaceIconButton";
import DeleteIcon from "./DeleteIcon.svg";
import EditIcon from "./EditIcon.svg";

const FavoritePlace = ({ img, description, title, isActive, onClick }) => {
  return (
    <section className="text-gray mb-6 last:mb-0">
      <div className="flex gap-4" onClick={onClick}>
        <img className="w-[76px] h-[76px] shrink-0" src={img} alt="" />
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-sm text-[#2C2C2C]">{title}</h2>
            <div className="flex gap-2">
              <FavoritPlaceIconButton>
                <img src={EditIcon} alt="EditIcon" />
              </FavoritPlaceIconButton>
              <FavoritPlaceIconButton>
                <img src={DeleteIcon} alt="DeleteIcon" />
              </FavoritPlaceIconButton>
            </div>
          </div>
          <p className="text-xs line-clamp-3">{description}</p>
        </div>
      </div>

      <div
        className={`h-[1px] w-full mt-4 ${
          isActive ? "bg-primary" : "bg-[#ececec]"
        }`}
      ></div>
    </section>
  );
};

export default FavoritePlace;
