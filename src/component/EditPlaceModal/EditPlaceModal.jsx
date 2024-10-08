import IModal from "../IModal/IModal";
import fallbackImage from "../../assets/img/ukraine.png";
import MarkerIcon from "../icons/MarkerIcon.jsx";
import IButton from "../IButton/IButton";
import InputImage from "../InputImage/InputImage";
import Input from "../Input/Input";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const EditPlaceModal = ({ isOpen, place, isLoading, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(place || {});
  const { t } = useTranslation();
  
  useEffect(() => {
    setFormData(place || {});
  }, [place]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return;
  return (
    <IModal onClose={onClose}>
      <div className="w-[750px]">
        <div className="flex gap-2 items-center mb-10">
          <MarkerIcon className="w-[18px] h-[18px]" />
          <span className="font-bold text-base">{t("edit marker")}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <div className="w-5/12">
              <img
                className="w-full h-[276px] object-cover rounded-md"
                src={fallbackImage}
                alt="place img"
              />
            </div>

            <div className="w-7/12">
              <Input
                label={t("location")}
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
                placeholder="Title"
              />
              <div className="mt-4">
                <Input
                  label={t("description")}
                  type="textarea"
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  placeholder="Description"
                />
              </div>
              <IButton
                className="mt-10 w-full"
                variant="gradient"
                disabled={isLoading}
              >
                {t("save")}
              </IButton>
            </div>
          </div>

          <InputImage className="mt-3">
            <span className="text-xs">{t("add another")}</span>
          </InputImage>
        </form>
      </div>
    </IModal>
  );
};

export default EditPlaceModal;
