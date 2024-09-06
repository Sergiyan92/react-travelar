import LoginForm from "./component/Auh/LoginForm/LoginForm";
import RegisterForm from "./component/Auh/RegisterForm/RegisterForm";

function App() {
  const handleSubmit = (formData) => {
    console.log("formData", formData);
  };
  const handleSubmitLogin = (formData) => {
    console.log("formData", formData);
  };
  return (
    // <div className="bg-white h-screen w-[400px]">
    //   <FavoritePlaces />
    // </div>
    <>
      <RegisterForm onSubmit={handleSubmit} />
      <LoginForm onSubmit={handleSubmitLogin} />
    </>
  );
}

export default App;
