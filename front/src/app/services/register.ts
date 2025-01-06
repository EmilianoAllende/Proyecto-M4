import axios from "axios";
import { RegisterData } from "@/interfaces/RegisterData";

export default async function register(registerForm: RegisterData) {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, registerForm);
}