import { getProducts } from "../services/getProducts";
import Product from "@/interfaces/Product";
import Link from "next/link";
import Card from "@/components/Card/Card";

export default async function productsPage() {
    const products:Product[] = await getProducts();

    return (
        <div className="mx-auto px-44 flex md:flex-wrap justify-center gap-2 md:gap-4">
            {products.map(({ name, price, image, id, }) => {
                return (
                    <>
                    <div className="">
                        <div>
                            <Link href={`products/${id}`}>
                                <Card
                                    key={id}
                                    name={name}
                                    price={price}
                                    image={image}
                                />
                            </Link>
                        </div>
                    </div>
                    </>
                );
            })}
        </div>
    );
};