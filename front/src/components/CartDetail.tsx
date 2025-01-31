"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Roby from "@/../public/CartToProducts.png";
import { AuthContext } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext"; // Usa el hook para obtener el contexto
import { postOrders } from "@/app/services/orders";
import swal from "sweetalert";

const CartDetail = () => {
    const { user, orders, setOrders } = useContext(AuthContext);
    const { items: cart, emptyCart } = useCart();

    const handleBuy = async () => {
        
        await postOrders(user?.id || 0, user?.token || "", cart).then((res) => {
            if (res.status === "approved") {
                setOrders([...orders, { id: parseInt(res.id) }]);

                swal({
                    title: "Purchased!",
                    text: "Your order was successfully processed.",
                    icon: "success",
                });
                emptyCart();
            } else {
                swal({
                    title: "Error",
                    text: `Your order can't be processed. ${res}`,
                    icon: "error",
                });
            }
        });
    };

    return (
        <div className="mx-auto place-items-center">
            {cart.length === 0 ? (
                <div className="mx-auto place-items-center">
                    <h2 className="bg-tertiaryColor text-xl text-center rounded-xl">
                        Cart is empty. <br />
                        You need to add{" "}
                        <Link href="/products" className="bg-secondaryColor rounded-full p-1 text-quaternaryColor">
                            Products
                        </Link>{" "}
                        first.
                    </h2>
                    <Image src={Roby} width={400} alt="Buy-Img" className="rounded-xl border-primaryColor" />
                </div>
            ) : (
                cart.map((item, index) => (
                    <div
                        key={index}
                        className="bg-secondaryColor bg-opacity-70 text-tertiaryColor items-center w-fit rounded-lg p-3 mx-auto"
                    >
                        <span>{item.name}</span>
                        <span className="ml-8">{`$ ${item.price}`}</span>
                        <span>{item.image}</span>
                    </div>
                ))
            )}
            <button onClick={handleBuy}
                disabled={cart.length === 0}
                className={`mx-auto w-32 rounded-full px-4 font-black text-3xl ${
                    cart.length === 0
                        ? "bg-transparent text-transparent"
                        : "bg-quaternaryColor text-pink-950"
                }`}>B  U  Y</button>
        </div>
    );
};

export default CartDetail;