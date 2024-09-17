import { useTranslation } from "react-i18next";
import IButton from "../IButton/IButton";
import IModal from "../IModal/IModal";

const ConfirmationModal = ({
  title,
  isOpen,
  isLoading,
  hasError,
  cancel,
  confirm,
}) => {
  const { t } = useTranslation();
  if (!isOpen) return;
  return (
    <IModal onClose={cancel}>
      <div className="mb-4 text-lg">{title}</div>
      <div className="flex gap-3 justify-center">
        <IButton onClick={cancel}>{t("reject")}</IButton>
        <IButton variant="gradient" isLoading={isLoading} onClick={confirm}>
          {t("confirm")}
        </IButton>
      </div>
      {hasError && <div className="text-red-500">{t("wrong")}</div>}
    </IModal>
  );
};
export default ConfirmationModal;
