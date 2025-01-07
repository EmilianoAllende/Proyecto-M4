import axios from "axios";
import { LoginData } from "@/interfaces/LoginData";

export default async function login(loginForm: LoginData) {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, loginForm);
}