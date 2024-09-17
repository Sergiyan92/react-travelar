import { useMemo, useState } from "react";
import IButton from "../IButton/IButton";
import IModal from "../IModal/IModal";
import Input from "../Input/Input";
import InputImage from "../InputImage/InputImage";
import MarkerIcon from "../icons/MarkerIcon.jsx";
import Ukraine from "../../assets/img/ukraine.png";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const uploadText = useMemo(() => {
    return formData.img ? t("change photo") : t("add photo");
  }, [formData.img, t]);

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
          <MarkerIcon /> { t('add marker') }
        </div>
        <Input
          label={t('location')}
          className="mb-4"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <Input
          label={t('description')}
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
          {t('add')}
        </IButton>
        {error && <div className="text-red-500">{t('wrong')}</div>}
      </form>
    </IModal>
  );
};

export default CreateNewPlaceModal;
