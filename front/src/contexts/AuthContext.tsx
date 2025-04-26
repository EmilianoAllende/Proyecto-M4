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
  addOrder: () => {},
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
      const fullUser = { ...JSON.parse(storedUser), token: storedToken };
      setUser(fullUser);
      setToken(storedToken);
      setIsAuthenticated(true);
      console.log("Hydrated user:", fullUser);
    } else {
      setUser(null);
      setToken(null);
      setIsAuthenticated(false);
    }
  }, []);

  const fetchOrders = async (userId: number, token: string, setOrders: (orders: Order[]) => void) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/orders?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (user?.id && token) {
      fetchOrders(user.id, token, setOrders);
    }
  }, [user, token]);

  const login = async (form: LoginData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        form
      );
      setUser({ ...response.data.user, token: response.data.token });
      console.log("Logged user:", response.data.user);
      setToken(response.data.token);
      setIsAuthenticated(true);

      localStorage.setItem("user", JSON.stringify({ ...response.data.user, token: response.data.token }));
      localStorage.setItem("token", response.data.token);
      console.log("USER after login:", { ...response.data.user, token: response.data.token });
    } catch (error) {
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
    setToken(null);
    setIsAuthenticated(false);
  };

  const addOrder = (orderId: number) => {
    console.log("Adding order with ID:", orderId);
    console.log("User ID:", user?.id);
    console.log("Token:", token);
    console.log("Orden agregada con ID:", orderId);
    
    emptyCart();

    if (user?.id && token) {
      fetchOrders(user.id, token, setOrders);
    }
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
};

export const useAuth = () => useContext(AuthContext);