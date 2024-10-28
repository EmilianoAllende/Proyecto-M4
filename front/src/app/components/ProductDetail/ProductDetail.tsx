import { Product } from '../Card/types';

interface ProductDetailProps {
    id: string;
    product: Product
};

const ProductDetail = ({ product }: ProductDetailProps) => {

    const {name, price, image, description} = product;

    return (
        <div className="rounded-3xl mx-auto flex flex-col bg-primaryColor p-8 text-tertiaryColor">
            <h1 className="mx-auto text-5xl font-bold">{name}</h1>

            <div className="flex flex-row">
                <img src={image} alt={name} />
                <p className="ml-8 text-quaternaryColor text-justify">{description}</p>
            </div>

            <div className="m-auto">
                <p>{price}</p>
                <button className="bg-secondaryColor rounded-full p-2 w-fit">ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductDetail;