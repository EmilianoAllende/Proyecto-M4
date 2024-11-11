"use client"
import Image from 'next/image';
import { Product } from '../../interfaces/Product';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/authContext';

interface ProductDetailProps {
    id: string;
    product: Product
};

const ProductDetail = ({ product }: ProductDetailProps) => {
    const { user } = useContext(AuthContext);
    const {name, price, image, description} = product;
    const handleAddToCart = () => 
        user?.login ? console.log(product) : console.log("Login first.");

    return (
        <div className="rounded-3xl mx-auto flex flex-col bg-primaryColor p-8 text-tertiaryColor">
            <h1 className="mx-auto text-5xl font-bold">{name}</h1>

            <div className="flex flex-row">
                <Image src={image} alt={name} width={500} height={500} sizes="20em, 33em"/>
                <p className="ml-8 text-quaternaryColor text-justify">{description}</p>
            </div>

            <div className="m-auto">
                <p>{price}</p>
                <button className="bg-secondaryColor rounded-full p-2 w-fit" onClick={handleAddToCart}>ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductDetail;