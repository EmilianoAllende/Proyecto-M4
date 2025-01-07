import React from "react";
import { RegisterFormInputProps } from "@/interfaces/RegisterFormInputProps";

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
    <div className="bg-secondaryColor mt-2 rounded-xl">
      <label className="block mb-2 text-sm font-medium text-quaternaryColor text-center w-full" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`bg-primaryColor text-tertiaryColor text-lg rounded-lg w-full px-3 py-2`}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={label}
      />
      {<p className="text-red-500 text-sm px-4">{error}</p>}
    </div>
  );
};

export default RegisterFormInput;