import { Product } from "@/interfaces/Product";
import productsMock from "@/app/mocks/products";


export const getProduts = async (): Promise<Product[]> => {
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
    const res = await getProduts();
    const featured = res.slice(0, 3);
    return featured;
};

export const getProductById = async (id: number): Promise<Product> => {
    const res = await getProduts();
    const product = res.filter((product) => product.id === id)[0];
    return product;
};
// await fetch(apiUrl + "/products", {
//         headers: {
//             'Cache-Control': 'no-store',
//         },
//     cache: 'no-store',
// });