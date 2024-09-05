import FavoritPlaceIconButton from "./FavoritPlaceIconButton";
import DeleteIcon from "./DeleteIcon.svg";
import EditIcon from "./EditIcon.svg";
const FavoritePlace = () => {
  return (
    <section className="text-[#939393] mb-6 last:mb-0">
      <div className="flex gap-4">
        <img className="w-[76px] h-[76px] shrink-0" src="" alt="" />
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-sm text-[#2C2C2C]">Палац Спорту</h2>
            <div className="flex gap-2">
              <FavoritPlaceIconButton>
                <img src={DeleteIcon} alt="DeleteIcon" />
              </FavoritPlaceIconButton>
              <FavoritPlaceIconButton>
                <img src={EditIcon} alt="EditIcon" />
              </FavoritPlaceIconButton>
            </div>
          </div>
          <p className="text-xs line-clamp-3">
            Ки́ївський пала́ц спо́рту (КПС) — найбільша крита спортивно-видовищна
            споруда України, розташована у центральній частині міста Київ, біля
            підніжжя Черепанової гори.
          </p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#ececec] mt-4"></div>
    </section>
  );
};

export default FavoritePlace;
