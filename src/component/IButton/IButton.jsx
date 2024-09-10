import { useMemo } from "react";
import { Link } from "react-router-dom";

const IButton = ({
  variant = "primary",
  children,
  to,
  onClick,
  className,
  isLoading,
}) => {
  const bgStyles = useMemo(() => {
    return variant === "gradient"
      ? "bg-gradient-to-r from-[#FFA279] to-[#F3743D]"
      : "bg-[#FFA279]";
  }, [variant]);

  const isLink = !!to;

 
  const Component = isLink ? Link : "button";

  return (
    <Component
      to={isLink ? to : undefined}
      className={`rounded-xl py-3 px-10 text-white font-bold -tracking-wider ${bgStyles} ${className}`}
      onClick={onClick}
    >
      {isLoading ? <div>Loading...</div> : children}
    </Component>
  );
};

export default IButton;
