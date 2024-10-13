"use client";

import ProductDetail from "@/app/components/ProductDetail/ProductDetail";
import productsMock from "@/app/mocks/products";

const page = ({params}: { params: { id: string } }) => {
    const { id } = params;
    return <ProductDetail id={id} product={productsMock[+id]} />;
};

export default page;