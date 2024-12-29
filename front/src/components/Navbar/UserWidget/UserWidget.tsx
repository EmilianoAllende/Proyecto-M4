"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { AuthContext } from '@/app/contexts/authContext';
import UserIcon from '../utils/user-application-identity-authentication-login-svgrepo-com.svg';

export const UserWidget = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>{
            !user?.login ? <Link href="/login">
                <Image src={UserIcon} width={50} height={50} alt='user-icon' className="mx-auto" />SIGN IN
            </Link> :(
            <div className="flex flex-col">
                <button onClick={logout}>
                    <Image src={UserIcon} width={30} height={30} alt='user-icon' className="mx-auto" />SIGN OUT
                </button>
                <Link href="/dashboard" className='m-auto'>{user.user.name}</Link>
            </div>)
        }</div>
    );
};