"use client"


import { createContext, useEffect, useState } from "react";
import { Order, UserSession } from "@/interfaces/UserSession";
import { AuthContextProps } from "@/interfaces/AuthContextProps";


export const AuthContext = createContext<AuthContextProps>({
    // USER
    user: null,
    setUser: () => {},
    logout: () => {},
    // ORDERS
    orders: [],
    setOrders: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserSession | null>(null);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setOrders(user?.user.orders || []);
        };
    }, [user]);

    useEffect(() => {
        //if (typeof window !== "undefined" && window) {
        const localUser = JSON.parse(localStorage.getItem("user")!);
        setUser(localUser);
        //}
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout, orders, setOrders }}>
            {children}
        </AuthContext.Provider>
    );
};