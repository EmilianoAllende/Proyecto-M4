import Product from "@/interfaces/Product";
import { notFound } from "next/navigation";
import swal from "sweetalert";
import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:3001";

export const getProducts = async (): Promise<Product[]> => {
    const fetch = await axios.get(apiUrl + "/products")
    try {
        // Error común, olvidarse del [data].
        return fetch.data;
    } catch (error) {
        swal({
            title:'Error',
            text:`Error obtaining the Products: ${error}.`,
            icon: 'error',
        })
    }
    return fetch.data;
};


export const getFeaturedProducts = async (): Promise<Product[]> => {
    const res = await getProducts();
    const featured = res.slice(0, 3);
    return featured;
};

export const getProductById = async (id: number): Promise<Product> => {
    const res = await getProducts();
    const product = res.filter((product) => product.id === id)[0];
    if(!product) {notFound()}
    return product;
};