import IButton from "../../component/IButton/IButton";
import markerIcon from "../../assets/img/map-pin.svg";
import BaseLayout from "../../component/BaseLoyout/BaseLayout";

const GreetingPage = () => {
  return (
    <BaseLayout>
      <div className="text-white text-center">
        <img className="inline mb-6" src={markerIcon} alt="Marker icon" />
        <h1 className="font-bold text-4xl mb-7">IT traveler</h1>
        <p className="leading-6 mb-11">
          Простий і зручний веб додаток, який дозволить тобі відмічати твої
          улюблені місця, а також ті, в яких би ти дуже хотів побувати. Тож не
          зволікай і спробуй сам.
        </p>
        <IButton to="/auth/register">Почати роботу</IButton>
      </div>
    </BaseLayout>
  );
};
export default GreetingPage;
