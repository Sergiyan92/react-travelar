import IButton from "../../component/IButton/IButton";
import mapImage from "../../assets/img/static-map.png";
import markerIcon from "../../assets/img/map-pin.svg";

const HomePage = () => {
  return (
    <main className="flex h-screen">
      <section className="flex-1 flex justify-center items-center px-5 bg-primary">
        <div className="text-white text-center">
          <img className="inline mb-6" src={markerIcon} alt="Marker icon" />
          <h1 className="font-bold text-4xl mb-7">IT traveler</h1>
          <p className="leading-6 mb-11">
            Простий і зручний веб додаток, який дозволить тобі відмічати твої
            улюблені місця, а також ті, в яких би ти дуже хотів побувати. Тож не
            зволікай і спробуй сам.
          </p>
          <IButton>Почати роботу</IButton>
        </div>
      </section>
      <section className="flex-1">
        <img className="h-full w-full object-cover" src={mapImage} alt="Map" />
      </section>
    </main>
  );
};

export default HomePage;
