"use client";
import { AuthContext } from "@/app//contexts/authContext";
import { useRouter } from "next/navigation" ;
import React, { useContext, useEffect } from "react" ;

const AuthProtected = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const context = useContext (AuthContext);
    const user = context.user?.user;

    useEffect(() => {
        if (!user) {
            router.push("/login");
        };
    }, []);

    return <>{children}</>
};

export default AuthProtected;