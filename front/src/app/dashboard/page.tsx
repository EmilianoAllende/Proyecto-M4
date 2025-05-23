"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const Dashboard = () => {
    const router = useRouter();
    const { user, orders } = useAuth();
    const { name, email, address, phone } = user ?? {};

    useEffect(() => {
        if (!user) {
                router.push("/home");
        };
    }, [router, user]);

    return (
        <div className="mx-auto text-justify w-fit text-tertiaryColor text-lg">
            <h1 className="bg-primaryColor rounded-xl p-4 font-bold text-4xl text-center">PROFILE</h1>
            <div className="bg-primaryColor bg-opacity-90 rounded-xl p-4 my-3">
                <div className="flex">
                    <p>NAME:</p>
                    <p className="text-gray-200 font-semibold ml-3">{name}</p>
                </div>
                <div className="flex">
                    <p>EMAIL:</p>
                    <p className="text-gray-200 font-semibold ml-3">{email}</p>
                </div>
                <div className="flex">
                    <p>PHONE:</p>
                    <p className="text-gray-200 font-semibold ml-3">{phone}</p>
                </div>
                <div className="flex">
                    <p>ADDRESS:</p>
                    <p className="text-gray-200 font-semibold ml-3">{address}</p>
                </div>
            </div>

            <div className="mt-4 bg-secondaryColor bg-opacity-90 rounded-xl p-4 w-">
                    <h5 className="">ORDERS</h5>

                    {orders && orders.length > 0 ? (
                        orders.map((order, index) => (
                            <div key={index} className="border-b-2 border-rose-50 mb-3">
                                <p className="font-semibold">Status: {order.status}</p>
                                <p>Date: {new Date(order.date).toLocaleString("es-AR", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                                <div className="ml-4 mt-2">
                                    <p className="underline">Products:</p>
                                    {order.products.map((product, i) => (
                                    <p key={i}>- {product.name}: ${product.price}</p>
                                    ))}
                                </div>
                                <p className="mt-2 font-bold">
                                    Total: ${order.products.reduce((sum, prod) => sum + prod.price, 0)}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No orders yet.</p>
                    )}
                </div>
        </div>
    );
};

export default Dashboard;