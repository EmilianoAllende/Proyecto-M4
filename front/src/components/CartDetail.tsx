"use client";
import { CartContext } from '@/app/contexts/cartContext';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Roby from '@/app/public/CartToProducts.png'
import { AuthContext } from '@/app/contexts/authContext';
import { postOrders } from '@/app/services/orders';
import swal from 'sweetalert';


const CartDetail = () => {

    const { user, orders, setOrders } = useContext(AuthContext);
    const { cart, emptyCart } = useContext(CartContext);

    const handleBuy = async () => {
        await postOrders(
            user?.user.id || 0,
            user?.token || "",
            cart).then((res) => {
                if (res.status === "approved") {
                    setOrders([...orders, { id: parseInt(res.id) }]);
                    // setOrders([...orders, { id: parseInt(res.id), status: "pendig", date: Date.now.toString() }]);
                    swal({
                        title: "Purchased!",
                        text: "Your order was succesfully processed.",
                        icon: "success",
                    });
                    emptyCart();
                } else {
                    swal({
                        title: "Error",
                        text: `Your order can't be processed. ${res}`,
                        icon: "error",
                    });
                };
            });
        };

    return (
        <div>
            {cart?.length === 0 ? 
            (<div className="mx-auto place-items-center">
                <h2 className="bg-tertiaryColor text-xl text-center rounded-xl">Cart is empty. <br/>You need to add <Link href="/products" className='bg-secondaryColor rounded-full p-1'>Products</Link> first.</h2>
                <Image src={Roby} width={400} alt='Buy-Img' className="rounded-xl border-primaryColor" />
            </div>) :
                (cart?.map((item, index) => (
                <div key={index}
                    className='bg-secondaryColor bg-opacity-70 items-center w-fit rounded-lg p-3 mx-auto'>
                    <span>{item.name}</span>
                    <span className='ml-8'>{`$ ${item.price}`}</span>
                </div>))
            )};
            <button onClick={handleBuy}>BUY</button>
        </div>
    );
};

export default CartDetail;