import { useEffect } from "react";
import ReactDOM from "react-dom";
import CrossIcon from "../icons/CrossIcon.svg";

const IModal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div
      className="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]"
      onClick={handleClickOutside}
    >
      <div className="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
        <button className="absolute right-3 top-3 w-6 h-6">
          <img src={CrossIcon} alt="CrossIcon" onClick={onClose} />
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
};

export default IModal;
