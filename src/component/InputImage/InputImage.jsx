import { useState } from "react";
import UploadIcon from "./UploadIcon.svg";

const InputImage = ({ onUpload, children }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleUploadImg = (e) => {
    const file = e.target.files[0];

    if (file.size > 3 * 1024 * 1024) {
      setErrorMessage("File to match");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setErrorMessage("");
      onUpload(fileReader.result);
    };
  };
  return (
    <div>
      <label className="cursor-pointer hover:text-primary">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUploadImg}
        />
        <span className="flex gap-1 items-center">
          <img src={UploadIcon} alt="" />
          <span className="underline text-xs">{children}</span>
        </span>
      </label>
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};
export default InputImage;
