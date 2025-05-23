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

    console.log("ORDERS DATA:", orders);
    return (
        <div className="mx-auto text-justify w-fit text-tertiaryColor text-lg">
            <h1 className="bg-primaryColor rounded-xl p-4 font-bold text-4xl">DASHBOARD</h1>
            <div className="bg-primaryColor bg-opacity-90 rounded-xl p-4 my-3">
                <p>NAME: {name}</p>
                <p>EMAIL: {email}</p>
                <p>PHONE: {phone}</p>
                <p>ADDRESS: {address}</p>
            </div>

            <div className="mt-4 bg-secondaryColor bg-opacity-90 rounded-xl p-4">
                    <h5 className="">ORDERS</h5>

                    {orders && orders.length > 0 ? (
                        orders.map((order, index) => (
                            <div key={index} className="border-b-2 border-rose-50 mb-3">
                                <p className="font-semibold">Status: {order.status}</p>
                                <p>Date: {order.date}</p>
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