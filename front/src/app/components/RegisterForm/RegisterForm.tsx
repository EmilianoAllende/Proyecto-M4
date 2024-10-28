"use client";
import React, { useState } from "react";
import { validateRegisterForm } from "../../helpers/validateRegister";
import swal from "sweetalert";
import RegisterFormInput from "./RegisterFormInput";

const RegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { nameError, emailError, passwordError, confirmPasswordError } =
      validateRegisterForm(data);

    if (nameError || emailError || passwordError || confirmPasswordError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({ name: "", email: "", password: "", confirmPassword: "" });

    try {
      console.log("Form submitted", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      swal("¡Registro exitoso!", "Te has registrado correctamente.", "success");
      setSubmitMessage("Registration successful!");
      setData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      console.error("Registration failed", error);
      swal("Error", "Registration failed. Please try again.", "error");
      setSubmitMessage("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    const error = validateRegisterForm({ ...data, [name]: value })[`${name}Error`];
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [e.target.name]: true });

const error = validateRegisterForm(data)[`${e.target.name}Error`];
    setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: error,
    }));
};

  const isFormValid =
    !errors.name &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    data.name &&
    data.email &&
    data.password &&
    data.confirmPassword;

  return (
    <form
      className="max-w-sm mx-auto flex flex-col gap-5 bg-primary"
      onSubmit={handleSubmit}
    >
      <RegisterFormInput
        id="name"
        label="Name"
        name="name"
        type="text"
        value={data.name}
        touched={touched.name}
        error={errors.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />

      <RegisterFormInput
        id="email"
        label="Email"
        name="email"
        type="email"
        value={data.email}
        touched={touched.email}
        error={errors.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />

      <RegisterFormInput
        id="password"
        label="Password"
        name="password"
        type="password"
        value={data.password}
        touched={touched.password}
        error={errors.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />

      <RegisterFormInput
        id="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={data.confirmPassword}
        touched={touched.confirmPassword}
        error={errors.confirmPassword}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />

      {submitMessage && (
        <p
          className={`text-sm ${
            submitMessage.includes("successful")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {submitMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`text-white ${
            !isFormValid || isSubmitting
              ? "bg-gray-400"
              : "bg-blue-700 hover:bg-blue-800"
          } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;