"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import UserIcon from '../utils/user-application-identity-authentication-login-svgrepo-com.svg';
import { useCart } from '@/contexts/CartContext';

export const UserWidget = () => {
    const { user, logout } = useAuth();

    const { emptyCart } = useCart()
    return (
        user ? (
            <div className="flex flex-col">
                <button onClick={() => {
                    logout();
                    emptyCart();
                }}>
                    <Image src={UserIcon} width={30} height={30} alt='user-icon' className="mx-auto" />
                    LOG OUT
                </button>
            </div>
        ) : (
            <div className='flex flex-col'>
                <Link href={"/auth/login"} className='bg-primaryColor rounded-full text-quaternaryColor py-1 mb-2 text-center'>LOG IN</Link>
                <Link href={"/auth/register"} className='bg-primaryColor rounded-full text-quaternaryColor p-1 text-center'>REGISTER</Link>
            </div>
        )
    );
};