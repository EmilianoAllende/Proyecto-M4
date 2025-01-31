"use client";

import { IProduct } from "@/interfaces/Product";
import { createContext, useContext, useEffect, useState } from "react";
import { ICartContextType } from "@/interfaces/CartContextType";
import Swal from "sweetalert2";

const CartContext = createContext<ICartContextType>({
    items: [],
    addItemToCart: (item: IProduct) => {},
    removeItemFromCart: () => {},
    emptyCart: () => {},
    countItems: (id: number) => 0,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<IProduct[]>([]);

    useEffect(() => {
        const savedItems = localStorage.getItem("cart");
        if (savedItems) return setItems(JSON.parse(savedItems));
        else setItems([]);
    }, []);

    const addItemToCart = (item: IProduct) => {
        const productExist = items.some((prod: IProduct) => {
            if(prod.id === item.id) return true;
            return false;
        })
        if(!productExist) {
            setItems([...items, item]);
        localStorage.setItem("cart", JSON.stringify([...items, item]));
        } else {Swal.fire({
            title: "Error!",
            text: "Produc already exist.",
            icon: "error"
        });}
    };

    const removeItemFromCart = (id: number) => {
        const filtered = items.filter((e) => e.id !== id);
        setItems(filtered);
        localStorage.setItem("cart", JSON.stringify(filtered));
    };

    const emptyCart = () => {
        setItems([]);
        localStorage.removeItem("cart");
    };

    const countItems = (id: number) => {
        return items.filter((e) => e.id === id).length;
    };

    return (
        <CartContext.Provider value={{ items, emptyCart, removeItemFromCart, addItemToCart, countItems }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
};



// const LogOutButton: React.FC = () => {
//     const { setUserData } = useAuth();
//     const router = useRouter();
  
//     const handleLogout = () => {
//       Swal.fire({
//         title: "Are you sure?",
//         text: "You will be logged out.",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Yes, log out",
//         cancelButtonText: "Cancel",
//         customClass: {
//           popup: "bg-black text-white rounded-xl shadow-lg",
//           title: "text-lg font-bold text-white",
//           confirmButton:
//             "bg-gray-700 hover:bg-gray-600 text-white rounded-xl px-4 py-2",
//           cancelButton:
//             "bg-gray-500 hover:bg-gray-400 text-white rounded-xl px-4 py-2",
//         },
//       }).then((result) => {
//         if (result.isConfirmed) {
//           setUserData(null);
//           localStorage.removeItem("userSession");
//           localStorage.removeItem("cart");
//           Cookies.remove("userData");
  
  
//           Swal.fire({
//             title: "Logged out",
//             text: "You have been successfully logged out.",
//             icon: "success",
//             confirmButtonText: "OK",
//             customClass: {
//               popup: "bg-black text-white rounded-xl shadow-lg",
//               title: "text-lg font-bold text-white",
//               confirmButton:
//                 "bg-gray-700 hover:bg-gray-600 text-white rounded-xl px-4 py-2",
//             },
//           }).then(() => {
//             router.push("/");
//           });
//         }
//       });
//     };
  
//     return (
//       <button
//         className="inline-flex items-center justify-center rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//         onClick={handleLogout}
//       >
//         Log Out
//       </button>
//     );
//   };
  
//   export default LogOutButton;


// setUserData(null);
//         localStorage.removeItem("userSession");
//         localStorage.removeItem("cart");
//         Cookies.remove("userData");