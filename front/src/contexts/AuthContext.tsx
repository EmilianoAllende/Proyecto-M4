"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { Order, UserSession } from "@/interfaces/UserSession";
import { AuthContextProps } from "@/interfaces/AuthContextProps";
import { LoginData } from "@/interfaces/LoginData";
import axios from "axios";

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
    login: (form: LoginData) => {},
    logout: () => {},
    orders: [],
    setOrders: () => {},
    isAuthenticated: false,
    token: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserSession | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);
    
    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token ) {
            setUser(JSON.parse(user));
            setToken(token);
            setIsAuthenticated(true);
        }
        else {
            setUser(null);
            setToken(null)
            setIsAuthenticated(false);
        }
    }, []);

    useEffect(() => {
        console.log("Current user:", user);
        if (user?.user?.orders) {
            setOrders(user.user.orders);
        } else {
            setOrders([]);
        }
    }, [user]);    

    const login = async (form: LoginData) => {
        try {
            const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
            form
            );
            setUser(response.data.user);
            setToken(response.data.token);
            setIsAuthenticated(true);

            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.token);
        } catch (error: any) {
            throw error.response?.data || error.message;
        };
    };

    const logout = async () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token")
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout, orders, setOrders, isAuthenticated, login, token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context
};