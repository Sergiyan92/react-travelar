const Input = ({ label, placeholder, className, type = "text", ...attrs }) => {
  const baseStyles =
    "w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary";
  const isTextArea = type === "textarea";
  const inputStyles = isTextArea ? `${baseStyles} resize:none` : baseStyles;
  
  return (
    <div className="w-full text-[#2C2C2C]">
      <label className="block">
        <span className="block text-xs px-3 mb-2">{label}</span>
        {isTextArea ? (
          <textarea
            className={inputStyles}
            rows="3"
            placeholder={placeholder}
            {...attrs}
          />
        ) : (
          <input
            className={`w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary ${className}`}
            type={type}
            placeholder={placeholder}
            {...attrs}
          />
        )}
      </label>
    </div>
  );
};

export default Input;
