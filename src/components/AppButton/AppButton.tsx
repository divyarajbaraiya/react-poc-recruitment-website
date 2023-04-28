import { FC } from "react";

import "./assets/style.scss";

interface AppButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  children: JSX.Element;
  onClick?: () => void;
}

export const AppButton: FC<AppButtonProps> = ({
  className,
  type = "button",
  variant = "primary",
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`app-btn app-btn--${variant} ${className}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
};
