import FavoritePlaces from "./component/FavoritPlaces/FavoritPlaces";

function App() {
  return (
    <div className="bg-white h-screen w-[400px]">
      <FavoritePlaces lable={<div>This is lable</div>}>
        <div>THis is super slot</div>
      </FavoritePlaces>
    </div>
  );
}

export default App;
