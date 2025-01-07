import { Order, UserSession } from "@/interfaces/UserSession";

export interface AuthContextProps {
    user: UserSession | null;
    setUser: (user: UserSession | null) => void;
    logout: () => void;
    orders: Order[];
    setOrders: (orders: Order[]) => void;
};