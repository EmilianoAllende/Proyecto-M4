"use client"

import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'

export default function Emi() {
    const { user } = useContext(AuthContext);
    const router = useRouter();
    useEffect(
        () => {
            if (!user) {
                router.push("/home");
            }
        }, [user, router]
    )
    return (
        <div>
            hola
        </div>
    )
};