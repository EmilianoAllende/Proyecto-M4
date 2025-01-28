"use client";

import { useCart } from "@/contexts/CartContext";
import { IProduct } from "@/interfaces/Product";
import { useEffect, useState } from "react";

export default function AddProduct({ product }: { product: IProduct}) {
    const { addItemToCart, items, countItems } = useCart();
    const [ disabled, setDisabled ] = useState(false);

    const clicHandler = () => {
        addItemToCart(product);
    };

    useEffect(()=>{
        countItems(product.id)>=product.stock && setDisabled(true)
    }, [items]);

    return(
        <button onClick={clicHandler} disabled={disabled} className="bg-secondaryColor rounded-full p-2 w-fit">ADD TO CART</button>
    );
};