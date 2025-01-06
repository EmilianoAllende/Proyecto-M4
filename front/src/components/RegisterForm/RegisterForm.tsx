"use client";

import React, { useState } from "react";
import { validateRegisterForm } from "../../helpers/validateRegister";
import RegisterFormInput from "./RegisterFormInput";
import register from "@/app/services/register";
import { Toast } from "../Toast";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const router = useRouter();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
        address: false,
        phone: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { nameError, emailError, passwordError, confirmPasswordError, addressError, phoneError } =
        validateRegisterForm(data);

        if (nameError || emailError || passwordError || confirmPasswordError || addressError || phoneError) {
        setErrors({
            name: nameError,
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
            address: addressError,
            phone: phoneError,
        });
        return;
        }

        setIsSubmitting(true);
        setErrors({ name: "", email: "", password: "", confirmPassword: "", address: "", phone: ""});

        try {
        console.log("Form submitted", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await register(data);
        Toast.fire("Great!", "You have been succesfully registered.", "success");
        setData({ name: "", email: "", password: "", confirmPassword: "", address: "", phone: "" });
        router.push("/auth/login")
        } catch (error) {
        console.error("Registration failed", error.response.data.message);
        Toast.fire("Error", error.response.data.message, "error");
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
        !errors.address &&
        !errors.phone &&
        data.name &&
        data.email &&
        data.password &&
        data.confirmPassword &&
        data.address &&
        data.phone;

    return (
        <form
        className="mx-auto flex flex-col gap-5 bg-primary"
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

        <RegisterFormInput
            id="address"
            label="Address"
            name="address"
            type="address"
            value={data.address}
            touched={touched.address}
            error={errors.address}
            handleChange={handleChange}
            handleBlur={handleBlur}
        />

        <RegisterFormInput
            id="phone"
            label="Phone"
            name="phone"
            type="phone"
            value={data.phone}
            touched={touched.phone}
            error={errors.phone}
            handleChange={handleChange}
            handleBlur={handleBlur}
        />

        <div className="mx-auto">
            <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`${
                !isFormValid || isSubmitting
                ? "bg-transparent text-transparent"
                : "bg-primaryColor text-tertiaryColor"
            } font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center`}
            >
            {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </div>
        </form>
    );
};

export default RegisterForm;