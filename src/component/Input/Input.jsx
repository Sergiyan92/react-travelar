import { useState } from "react";

const Input = ({ label }) => {
  const [text, setText] = useState("");

  const changeValue = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="w-full text-[#2C2C2C]">
      <label className="block">
        <span className="block text-xs px-3 mb-2">
          {label}: {text}
        </span>
        <input
          onFocus={() => console.log("focused")}
          className="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
          type="text"          
          onChange={changeValue}
        />
      </label>
    </div>
  );
};

export default Input;
