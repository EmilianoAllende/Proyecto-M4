"use client";

import Image from 'next/image';
import AddProduct from '../AddProduct';
import ProductProps from '@/interfaces/ProductProps';

export default function ProductDetail ({ product }: ProductProps) {
    const { name, price, image, description, stock } = product;

    return (
        <div className="rounded-3xl mx-auto flex flex-col bg-primaryColor p-8 text-tertiaryColor">
            <h1 className="mx-auto text-5xl font-bold">{name}</h1>

            <div className="flex flex-row">
                <Image src={image} alt={name} width={300} height={200}/>
                <p className="ml-8 text-quaternaryColor text-justify">{description}</p>
            </div>

            <div className="m-auto text-center">
                <p>Stock: {stock}</p>
                <p className='py-4'>${price}</p>
                <div className='bg-secondaryColor rounded-3xl py-1 px-2 text-cyan-950'>
                    <AddProduct product={product}/>

                </div>
            </div>
        </div>
    );
};