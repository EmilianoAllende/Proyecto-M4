"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { AuthContext } from '../../../../../contexts/authContext';
import UserIcon from '../utils/user-application-identity-authentication-login-svgrepo-com.svg';

export const UserWidget = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>{
            !user?.login ? <Link href="/login">
                <Image src={UserIcon} max-width={50} max-height={50} alt='user-icon' className="mx-auto" />LOGIN
            </Link> :(
            <button onClick={logout}>
                <Image src={UserIcon} max-width={50} max-height={50} alt='user-icon' className="mx-auto" />LOGOUT
            </button>)
        }</div>
    );
};