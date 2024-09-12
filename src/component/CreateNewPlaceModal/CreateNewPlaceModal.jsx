import { useMemo, useState } from "react";
import IButton from "../IButton/IButton";
import IModal from "../IModal/IModal";
import Input from "../Input/Input";
import InputImage from "../InputImage/InputImage";
import MarkerIcon from "../icons/MarkerIcon.jsx";
import Ukraine from "../../assets/img/ukraine.png";

const CreateNewPlaceModal = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  error,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
  });

  const uploadText = useMemo(() => {
    return formData.img
      ? "Натисніть тут, щоб змінити фото"
      : "Натисніть тут, щоб додати фото";
  }, [formData.img]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpload = (url) => {
    setFormData((prevData) => ({
      ...prevData,
      img: url,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, img: formData.img || Ukraine });
    setFormData({ title: "", description: "", img: "" });
    onClose();
  };

  if (!isOpen) return;
  return (
    <IModal onClose={onClose}>
      <form onSubmit={handleSubmit} className="min-w-[420px]">
        <div className="flex gap-1 justify-center font-bold text-center mb-10">
          <MarkerIcon /> Додати маркер
        </div>
        <Input
          label="Локація"
          className="mb-4"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <Input
          label="Опис"
          type="textarea"
          className="mb-2"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        {formData.img && (
          <img
            src={formData.img || Ukraine}
            alt=""
            className="w-[100px] h-[100px] object-cover"
          />
        )}
        <InputImage className="mb-10" onUpload={handleUpload}>
          {uploadText}
        </InputImage>
        <IButton className="w-full" variant="gradient" isLoading={isLoading}>
          Додати
        </IButton>
        {error && <div className="text-red-500">Щось пішло не так</div>}
      </form>
    </IModal>
  );
};

export default CreateNewPlaceModal;
