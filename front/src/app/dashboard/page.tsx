"use client";

import { AuthContext, AuthProvider, useAuth } from "@/contexts/AuthContext";
import { usePrivate } from "@/hooks/usePrivate";
import { useContext, useEffect } from "react";

const Dashboard = () => {
    usePrivate();

    const { user } = useAuth();
    const {name, email, address, phone } = user ?? {};
    const context = useContext(AuthContext);
    const orders = context.orders;
    console.log(orders);

    // useEffect(() => {
    //     getUserOrders()
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setOrders(data);
    //         })
    //         .catch((error) => console.error("Error al obtener órdenes:", error));
    // }, []);
    //${API_URL}/users/orders
    
    return (
        <AuthProvider>
        <div className="mx-auto text-justify w-fit text-tertiaryColor text-lg">
            <h1 className="bg-primaryColor rounded-xl p-4 font-bold text-4xl">Dashboard</h1>
            <div className="bg-primaryColor bg-opacity-90 rounded-xl p-4 my-3">
                <h2>NAME: {name}</h2>
                <h4>EMAIL: {email}</h4>
                <h4>PHONE: {phone}</h4>
                <h4>ADRESS: {address}</h4>
            </div>

            <div className="mt-4 bg-secondaryColor bg-opacity-90 rounded-xl p-4">
                <h5>ORDERS</h5>
                {orders.length && orders.length > 0 ? 
                    orders.map((order, index) => (
                        <div key={index}>
                            <p>Order ID: {order.id}</p>
                        </div>
                )) : "No orders yet."}
            </div>
        </div>
        </AuthProvider>
    );
};

export default Dashboard;