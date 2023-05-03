import { FC, useState } from "react";
import "./assets/style.scss";
import { UseFormRegister } from "react-hook-form";
import { BsEyeSlash, BsEyeFill } from "react-icons/bs";

interface OptionType {
  label: string;
  value: string;
}

interface AppFormInputProps {
  type?: string;
  className?: string;
  label: string;
  required?: boolean;
  errorMessage?: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  options?: OptionType[];
  value?: string;
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
  options = [],
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  console.log(value,"value");
  

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            id={name}
            {...register(name)}
            placeholder={placeholder}
            className={`form-input form-input--select ${value ? "" : "placeholder-text"}`}
            value={value}
          >
            <option value="" disabled selected hidden>
              {placeholder}
            </option>

            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={showPassword ? "text" : type}
            id={name}
            {...register(name)}
            placeholder={placeholder}
            className="form-input"
          />
        );
    }
  };

  return (
    <div className={`app-form-container ${className}`}>
      <label
        htmlFor={name}
        className="description-title description-title--secondary mb-1"
      >
        {label}
        {required && <span className="active-link">*</span>}
      </label>

      {renderInput()}

      {type === "password" && (
        <div
          className="eye-icon"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <BsEyeFill /> : <BsEyeSlash />}
        </div>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};
