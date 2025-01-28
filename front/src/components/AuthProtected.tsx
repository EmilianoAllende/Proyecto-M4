"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";

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