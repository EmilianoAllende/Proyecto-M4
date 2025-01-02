import { getProductById } from "@/app/services/getProducts";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

export default async function Product({
    params
}: {
    params:Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProductById(Number(slug));

    console.log(product);

    return(
        <div>
            <ProductDetail id={Number(slug)} product={product}/>
        </div>
    )
};

