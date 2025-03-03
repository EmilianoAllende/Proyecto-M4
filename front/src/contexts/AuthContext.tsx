"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { Order, UserSession } from "@/interfaces/UserSession";
import { AuthContextProps } from "@/interfaces/AuthContextProps";
import { LoginData } from "@/interfaces/LoginData";
import axios from "axios";
import { useCart } from "./CartContext";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  orders: [],
  setOrders: () => {},
  isAuthenticated: null,
  token: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const { emptyCart } = useCart();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser({ ...JSON.parse(storedUser), token: storedToken });
      setToken(storedToken);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setToken(null);
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    setOrders(user?.orders || []);
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
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Este es el error del AuthContext", error.message);
      }
      else {
        console.log("Error desconocido en AuthContext", error);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    emptyCart();
    setUser(null);
    setIsAuthenticated(false);
  };

  const addOrder = (orderId: number) => {
    setOrders([...orders, { id: orderId }]);
    emptyCart();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        orders,
        setOrders,
        isAuthenticated,
        login,
        token,
        addOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
