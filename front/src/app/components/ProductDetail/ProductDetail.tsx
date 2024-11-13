"use client"

import { CartContext } from '@/app/contexts/cartContext';
import { AuthContext } from '../../contexts/authContext';
import { Product } from '../../interfaces/Product';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import Image from 'next/image';

interface ProductDetailProps {
    id: string;
    product: Product
};

const ProductDetail = ({ product }: ProductDetailProps) => {
    const { user } = useContext(AuthContext);
    const { cart, setCart } = useContext(CartContext)
    const router = useRouter();
    const {name, price, image, description} = product;

    const handleAddToCart = () => {
        if (user?.login) {
            setCart([...cart, product.id])
            swal({
                title: "Added.",
                text: "Product succesfully added to cart.",
                icon: "success"
            });
        } else {
            swal({
                title: "Login First!",
                text: "You need to login in order to make a purchase.",
                icon: "warning",
            });
            setTimeout(() => {
                router.push("/login")
            }, 2000);
        };
    };

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