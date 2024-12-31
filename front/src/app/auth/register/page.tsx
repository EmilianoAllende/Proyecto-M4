import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function Register() {
    return(
        <div className="w-11/12">
            <h1 className="bg-primaryColor rounded-full text-quaternaryColor py-3 px-24 font-bold text-xl w-fit mx-auto">REGISTER</h1>
            <RegisterForm/>
        </div>
    );
};