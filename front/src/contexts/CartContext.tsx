"use client";

import { IProduct } from "@/interfaces/Product";
import { createContext, useContext, useEffect, useState } from "react";
import { ICartContextType } from "@/interfaces/CartContextType";

const CartContext = createContext<ICartContextType>({
    items: [],
    addItemToCart: (item: IProduct) => {},
    removeItemFromCart: () => {},
    emptyCart: () => {},
    countItems: (id: number) => 0,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<IProduct[]>([]);

    useEffect(() => {
        const savedItems = localStorage.getItem("cart");
        if (savedItems) return setItems(JSON.parse(savedItems));
        setItems([]);
    }, []);

    const addItemToCart = (item: IProduct) => {
        setItems([...items, item]);
        localStorage.setItem("cart", JSON.stringify([...items, item]));
    };

    const removeItemFromCart = (id: number) => {
        const filtered = items.filter((e) => e.id !== id);
        setItems(filtered);
        localStorage.setItem("cart", JSON.stringify(filtered));
    };

    const emptyCart = () => {
        setItems([]);
        localStorage.removeItem("cart");
    };

    const countItems = (id: number) => {
        return items.filter((e) => e.id === id).length;
    };

    return (
        <CartContext.Provider value={{ items, emptyCart, removeItemFromCart, addItemToCart, countItems }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
};