"use client";

import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

const dashboardPage = () => {
    const context = useContext(AuthContext);
    const user = context.user?.user;
    const orders = context.orders;
    return (
        <div className="mx-auto text-center w-fit">
            <div className="bg-secondaryColor bg-opacity-70">
                <h1>Dashboard</h1>
                <h2>NAME: {user?.name}</h2>
                <h4>EMAIL: {user?.email}</h4>
                <h4>PHONE: {user?.phone}</h4>
                <h4>ADRESS: {user?.adress}</h4>
            </div>

            <div className="mt-4 bg-secondaryColor bg-opacity-50">
                <h5>ORDERS</h5>
                {orders.length && orders.length > 0 ? 
                    orders.map((order, index) => (
                        <div key={index}>
                            <p>Order ID: {order.id}</p>
                        </div>
                )) : "No orders yet."}
            </div>
        </div>
    );
};

export default dashboardPage;