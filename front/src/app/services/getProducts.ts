import Product from "@/interfaces/Product";
import productsMock from "@/app/mocks/products";
import { notFound } from "next/navigation";
import swal from "sweetalert";


export const getProducts = async (): Promise<Product[]> => {
    try {
        return productsMock;
    } catch (error) {
        swal({
            title:'Error',
            text:`Error obtaining the Products: ${error}.`,
            icon: 'error',
        })
    }
    return productsMock
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