"use client"

import { Order, UserSession } from "@/app/interfaces/UserSession";
import { createContext, useEffect, useState } from "react"

interface AuthContextProps {
    user: UserSession | null;
    setUser: (user: UserSession | null) => void;
    logout: () => void;
    orders: Order[];
    setOrders: (orders: Order[]) => void;

};

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    orders: [],
    setUser: () => {},
    logout: () => {},
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
        const localUser = JSON.parse(localStorage.getItem("user")!);
        setUser(localUser);
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