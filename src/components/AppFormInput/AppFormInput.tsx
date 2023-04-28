import { FC } from "react";
import "./assets/style.scss";
import { UseFormRegister } from "react-hook-form";
import { BsEyeSlash } from "react-icons/bs";

interface AppFormInputProps {
  type?: string;
  className?: string;
  label: string;
  required?: boolean;
  errorMessage?: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
}

export const AppFormInput: FC<AppFormInputProps> = ({
  className,
  label,
  required = false,
  errorMessage,
  name,
  placeholder = "",
  register,
  type = "text",
}) => {
  return (
    <div className={`app-form-container ${className}`}>
      <label
        htmlFor={name}
        className="description-title description-title--secondary"
      >
        {label}
        {required && <span className="active-link">*</span>}
      </label>

      <input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className="form-input"
      />

      {type === "password" && (
        <div className="eye-icon">
          <BsEyeSlash />
        </div>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};
