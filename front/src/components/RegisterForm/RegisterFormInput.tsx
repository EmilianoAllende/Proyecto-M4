// src/app/components/RegisterForm/RegisterFormInput.tsx
import React from "react";
import { RegisterFormInputProps } from "@/app/interfaces/RegisterFormInputProps";

const RegisterFormInput: React.FC<RegisterFormInputProps> = ({
  id,
  label,
  name,
  type,
  value,
  error,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="bg-secondaryColor mt-8 rounded-xl">
      <label className="block mb-2 text-sm font-medium text-primaryColor" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`bg-primaryColor text-tertiaryColor text-sm rounded-lg w-full p-3`}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={label}
      />
      {<p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default RegisterFormInput;