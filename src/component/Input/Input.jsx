const Input = ({ label, placeholder, className, type = "text", ...rest }) => {
  return (
    <div className="w-full text-[#2C2C2C]">
      <label className="block">
        <span className="block text-xs px-3 mb-2">{label}</span>
        <input
          className={`w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary ${className}`}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </label>
    </div>
  );
};

export default Input;
