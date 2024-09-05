

const IButton = ({ children, className }) => {
  return (
    <button className={`bg-[#FFA279] rounded-xl py-3 px-10 text-white font-bold tracking-wider ${className}`}>
      {children}
    </button>
  );
};

export default IButton;
