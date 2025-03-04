// "use client";

// import { AuthContext, useAuth } from "@/contexts/AuthContext";
// import { useContext } from "react";

// const Dashboard = () => {
//     useAuth()

//     const { user } = useAuth();
//     const {name, email, address, phone } = user ?? {};
//     const context = useContext(AuthContext);
//     const orders = context.orders;

//     return (
//             <div className="mx-auto text-justify w-fit text-tertiaryColor text-lg">
//                 <h1 className="bg-primaryColor rounded-xl p-4 font-bold text-4xl">DASHBOARD</h1>
//                 <div className="bg-primaryColor bg-opacity-90 rounded-xl p-4 my-3">
//                     <p>NAME: {name}</p>
//                     <p>EMAIL: {email}</p>
//                     <p>PHONE: {phone}</p>
//                     <p>ADRESS: {address}</p>
//                 </div>

//                 <div className="mt-4 bg-secondaryColor bg-opacity-90 rounded-xl p-4">
//                     <h5 className="">ORDERS</h5>
//                     {orders.length && orders.length > 0 ? 
//                         orders.map((order, index) => {
                            
//                             return (
//                                 <div key={index} className="border-b-2 border-rose-50 mb-3">
//                                     <p>Status: {order.status}</p>
//                                     <p>Date: {order.date}</p>
//                                 </div>
//                             );
//                         }) 
//                     : "No orders yet."}
//                 </div>
//             </div>
//             )
// };

// export default Dashboard;



"use client";

import { useRouter } from "next/navigation";
import { useAuth, AuthContext } from "@/contexts/AuthContext";
import { useEffect, useState, useContext } from "react";

const Dashboard = () => {
    const router = useRouter();
    const { user, isAuthenticated } = useAuth();
    const { name, email, address, phone } = user ?? {};
    const context = useContext(AuthContext);
    const orders = context.orders;

    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (isAuthenticated !== undefined) {
            setIsChecking(false);
            if (!isAuthenticated) {
                router.push("/home");
            }
        }
    }, [isAuthenticated, router]);

    if (isChecking) return <p className="text-center text-lg mt-20">Loading...</p>;

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
                    {orders.length && orders.length > 0 ? 
                        orders.map((order, index) => {
                            
                            return (
                                <div key={index} className="border-b-2 border-rose-50 mb-3">
                                    <p>Status: {order.status}</p>
                                    <p>Date: {order.date}</p>
                                </div>
                            );
                        }) 
                    : "No orders yet."}
                </div>
        </div>

        
    );
};

export default Dashboard;