"use client";

import { ChangeEvent, FormEvent, useEffect, useState, useContext } from "react";
import Link from "next/link";
import { validateEmail, validatePassword } from "@/app/helpers/validateLogin";
import swal from "sweetalert";
import { login } from "../../services/auth";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../../../contexts/authContext";

const LoginForm = () => {
    const { setUser } = useContext(AuthContext);
    
    const router = useRouter();

    const initialData = { email: "", password: "" }
    const [data, setData] = useState (initialData);
    const [errors, setErrors] = useState (initialData);
    const [touched, setTouched] = useState ({ email:false, password: false });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await login(data);
        console.log(res);
        if (res.statusCode) {
            swal({
                title: "Error",
                text: `${res.message}`,
                icon: "error"
            })
        } else {
            swal({
                title: "Logged.",
                text: "User succesfully loged in.",
                icon: "success"
            });
        }

        setUser(res);
        router.push("/");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    useEffect(() => {
        setErrors({
            email: validateEmail(data.email),
            password: validatePassword(data.password)
        });
    }, [data]);

    return (
        <div className="flex flex-col">
            <div className="mx-auto">
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
                    <div>
                        <label className="bg-primaryColor rounded-md p-1 font-semibold text-secondaryColor">USER</label>
                        <input type="text"
                        placeholder="name@mail.com"
                        id="email"
                        className="mt-1 bg-primaryColor text-tertiaryColor text-sm rounded-lg w-full p-3"
                        onChange={(e) => handleChange(e)}
                        value={data.email}
                        name="email"
                        onBlur={(e) => handleBlur(e)}
                        required />
                        {touched.email && <p className="text-red-600 bg-black rounded-xl w-48 p-1">{errors.email}</p>}
                    </div>

                    <div className="mt-2 mb-2">
                        <label className="bg-primaryColor rounded-md p-1 font-semibold text-secondaryColor">PASSWORD</label>
                        <input type="password"
                        placeholder="password"
                        id="password"
                        className="mt-1 bg-primaryColor text-tertiaryColor text-sm rounded-lg w-full p-3"
                        onChange={(e) => handleChange(e)}
                        value={data.password}
                        name="password"
                        onBlur={(e) => handleBlur(e)}
                        required />
                        {touched.password && <p className="text-red-600 bg-black rounded-xl w-72 p-1">{errors.password}</p>}
                    </div>

                    <button 
                    type="submit"
                    
                    className={`bg-primaryColor rounded-full p-2 mx-auto text-secondaryColor ${
                        errors.email !== "" &&
                        errors.password !== "" && 
                        data.email === "" &&
                        data.password === ""
                        ? "pointer-events-none"
                        : null
                    }`}>
                    SUBMIT
                    </button>

                    <Link href="/register" className="mt-5 mx-auto">
                        <button type="submit" className="bg-secondaryColor rounded-full p-2">REGISTER</button>
                    </Link>
                </form>
            </div>

        </div>
);
};

export default LoginForm;