"use client"

import { createContext, useEffect, useState } from "react"

export interface Cart {
    id: number;
    name: string;
    price: number,
    stock: number,
    image: string,
    description: string
}

interface CartContextProps {
    cart: Cart[];
    setCart: (cart: Cart[]) => void;
    emptyCart: () => void;
};

export const CartContext = createContext<CartContextProps>({
    cart: [],
    setCart: () => {},
    emptyCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Cart[]>([]);

    useEffect(() => {
        if (cart?.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart")!);
        setCart(localCart);
    }, []);

    const emptyCart = () => {
        localStorage.removeItem("cart");
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
};