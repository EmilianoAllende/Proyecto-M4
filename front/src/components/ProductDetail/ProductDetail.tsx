"use client";

import Image from 'next/image';
import AddProduct from '../AddProduct';
import ProductProps from '@/interfaces/ProductProps';
import wapIcon from '@/utils/whatsapp-svgrepo-com.svg'

export default function ProductDetail ({ product }: ProductProps) {
    const { name, price, image, description, stock } = product;

    const handleShareWhatsApp = () => {
        const message = `This product is for you!\n\n${name}\n\n${description}\n\nPrice: $${price}\n\nMore details here: ${window.location.href}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="rounded-3xl mx-auto flex flex-col bg-primaryColor p-8 text-tertiaryColor">
            <h1 className="mx-auto text-5xl font-bold">{name}</h1>

            <div className="flex flex-row">
                <Image src={image} alt={name}
                width={300} height={200} 
                className="flex flex-row max-h-72 max-w-64"/>
                <p className="ml-8 text-quaternaryColor text-justify">{description}</p>
            </div>

            <div className="m-auto text-center -mt-14">
                <p>Stock: {stock}</p>
                <p className='py-4'>${price}</p>

                <div className='flex space-x-10'>
                    <div className='bg-secondaryColor rounded-3xl py-2 px-4 my-auto text-green-500 font-semibold'>
                        <AddProduct product={product}/>
                    </div>

                    <Image src={wapIcon} alt='wapIcon'
                        onClick={handleShareWhatsApp}
                        className="font-semibold rounded-lg opacity-70 hover:scale-110 hover:opacity-100 transition duration-200 w-14" />
                </div>
            </div>
        </div>
    );
};