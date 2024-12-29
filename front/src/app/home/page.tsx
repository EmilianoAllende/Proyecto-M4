"use client"

import { Product } from "@/interfaces/Product";
import { getProduts } from "../services/products";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import Link from "next/link";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProduts()
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                alert(`Error obtaining products: ${error}`)
            });
}, []);
    return (
        <div className="mx-auto px-44">
            {products.map(({ name, price, image, description, stock, id, }) => {
                return (
                    <>
                    <div>
                        <div>
                        <Link href={`${id}`}>
                            <Card
                                key={id}
                                name={name}
                                price={price}
                                image={image}
                                description={description}
                                stock={stock}
                                
                            />
                        </Link>
                        </div>
                    </div>
                    </>
                );
            })};
        </div>
    );
};