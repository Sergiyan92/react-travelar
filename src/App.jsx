import { useState } from "react";
import LoginForm from "./component/Auh/LoginForm/LoginForm";
import RegisterForm from "./component/Auh/RegisterForm/RegisterForm";
import CreateNewPlaceModal from "./component/CreateNewPlaceModal/CreateNewPlaceModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = (formData) => {
    console.log("formData", formData);
  };
  const handleSubmitLogin = (formData) => {
    console.log("formData", formData);
  };
  const handleCrate = (formData) => {
    console.log("form", formData);
  };
  return (
    // <div className="bg-white h-screen w-[400px]">
    //   <FavoritePlaces />
    // </div>
    <>
      <button onClick={openModal}>Click me</button>
      <RegisterForm onSubmit={handleSubmit} />
      <LoginForm onSubmit={handleSubmitLogin} />
      <CreateNewPlaceModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={handleCrate}
      />
    </>
  );
}

export default App;
