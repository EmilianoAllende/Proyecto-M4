// import axios from "axios";

// export default async function register(registerForm) {
//     await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, registerForm);
// };

import axios from "axios";

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: string;
}

export default async function register(registerForm: RegisterForm): Promise<void> {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, registerForm);
}