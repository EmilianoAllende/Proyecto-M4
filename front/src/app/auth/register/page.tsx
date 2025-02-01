import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Link from "next/link";

export default function Register() {
    return(
        <div className="w-11/12">
            <h1 className="bg-primaryColor rounded-full text-quaternaryColor py-3 px-24 font-bold text-xl w-fit mx-auto">REGISTER</h1>
            <RegisterForm/>
            <div className="flex w-fit justify-self-center">
                <p className="bg-slate-900 text-green-400 font-extrabold mr-5 rounded-lg px-2 py-1">Already registered.</p>
                <Link href={"/auth/login"} className="bg-quaternaryColor rounded-xl px-2 text-lg py-1 font-semibold">LOGIN</Link>
            </div>
        </div>
    );
};