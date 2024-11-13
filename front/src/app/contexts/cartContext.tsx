"use client"

import { createContext, useEffect, useState } from "react"

interface CartContextProps {
    cart: number[];
    setCart: (cart: number[]) => void;
};

export const CartContext = createContext<CartContextProps>({
    cart: [],
    setCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<number[]>([]);

    useEffect(() => {
        console.log(cart);
    }, [cart])
    
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};