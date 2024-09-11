const FavoritPlaceIconButton = ({onClick, children }) => {
  return (
    <button className="text-gray cursor-pointer hover:text-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default FavoritPlaceIconButton;
