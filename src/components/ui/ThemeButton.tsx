import React, { ReactNode } from "react";

interface ThemeButtonProps {
  text: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  variant?: "shimmer" | "primary" | "glow";
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  text,
  onClick,
  icon,
  className = "",
  variant = "primary",
}) => {
  const baseClasses =
    "flex items-center justify-center transition-all duration-300 gap-2 cursor-pointer";

  const shimmerClasses =
    "rounded-full! text-white shadow-lg shimmer-btn hover:shadow-2xl hover:-translate-y-0.5 px-8 py-3 text-lg font-semibold leading-7";

  const primaryClasses =
    "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md hover:opacity-90 px-8 py-3 text-lg font-semibold leading-7";

  const glowClasses = `px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-lg text-white bg-primary hover:bg-purple-600 shadow-[0_0_32px_rgba(155,50,255,0.4)] hover:shadow-[0_0_52px_rgba(155,50,255,0.65)]`;

  let variantClasses = primaryClasses;
  if (variant === "shimmer") variantClasses = shimmerClasses;
  if (variant === "glow") variantClasses = glowClasses;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default ThemeButton;
