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
  if (!isOpen) return;
  return (
    <IModal onClose={cancel}>
      <div className="mb-4 text-lg">{title}</div>
      <div className="flex gap-3 justify-center">
        <IButton onClick={cancel}>Відхилити</IButton>
        <IButton variant="gradient" isLoading={isLoading} onClick={confirm}>
          Підтвердити
        </IButton>
      </div>
      {hasError && <div className="text-red-500">Щось пішло не так</div>}
    </IModal>
  );
};
export default ConfirmationModal;
