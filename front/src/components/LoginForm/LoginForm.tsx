"use client";

import { ChangeEvent, FormEvent, useState, useContext } from "react";
import Link from "next/link";
import { AuthContext, useAuth } from "@/contexts/AuthContext";
import { Toast } from "../Toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const { login } = useAuth();
    const router = useRouter();
    const { setUser } = useContext(AuthContext);

    const initialData = { email: "", password: "" };
    const [data, setData] = useState(initialData);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await login(data);
            Toast.fire(
                "You just logged in!",
                "Now you are going to be redirected to Home.",
                "success"
            );
            setTimeout(() => {
                router.push("/home");
            }, 3000);
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || "Something went wrong. Please try again."
            const messageToShow = ["Invalid password", "User does not exist"].includes(errorMessage) ? "Invalid Credentials": errorMessage;
            setError(messageToShow);
            Toast.fire("Error", messageToShow, "error");
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError(null);
    };

    return (
        <div className="flex flex-col">
            <div className="mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col">

                    <div>
                        <label className="bg-primaryColor rounded-md p-1 font-semibold text-quaternaryColor">
                            USER
                        </label>
                        <input
                            type="text"
                            placeholder="name@mail.com"
                            id="email"
                            className="mt-1 bg-primaryColor text-tertiaryColor text-sm rounded-lg w-full p-3"
                            onChange={handleChange}
                            value={data.email}
                            name="email"
                            required
                        />
                    </div>

                    <div className="mt-2 mb-2">
                        <label className="bg-primaryColor rounded-md p-1 font-semibold text-quaternaryColor">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            id="password"
                            className="mt-1 bg-primaryColor text-tertiaryColor text-sm rounded-lg w-full p-3"
                            onChange={handleChange}
                            value={data.password}
                            name="password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`bg-primaryColor rounded-full p-2 mx-auto text-quaternaryColor ${
                            !data.email || !data.password
                                ? "pointer-events-none bg-transparent text-transparent"
                                : ""
                        }`}
                    >
                        SUBMIT
                    </button>

                    <Link href="/auth/register" className="mt-5 mx-auto">
                        <button
                            type="submit"
                            className="bg-secondaryColor rounded-full p-2 text-tertiaryColor"
                        >
                            REGISTER
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};