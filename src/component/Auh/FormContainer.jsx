const FormContainer = ({ children }) => {
  return (
    <form className="max-w-[500px] w-full bg-white p-10 rounded-2xl">
      {children}
    </form>
  );
};

export default FormContainer;
