import { useMemo } from "react";

const IButton = ({ variant = "primary", children, onClick }) => {
  const bgStyles = useMemo(() => {
    return variant === "gradient"
      ? "bg-gradient-to-r from-[#FFA279] to-[#F3743D]"
      : "bg-[#FFA279]";
  },[variant]);

  return (
    <button
      className={`rounded-xl py-3 px-10 text-white font-bold -tracking-wider ${bgStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IButton;
