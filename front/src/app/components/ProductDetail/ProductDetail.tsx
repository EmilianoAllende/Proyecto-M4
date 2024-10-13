import { Product } from '../Card/types';
import styles from './ProductDetail.module.css'

interface ProductDetailProps {
    id: string;
    product: Product
};

const ProductDetail = ({ product }: ProductDetailProps) => {

    const {title, price, image, description} = product;

    return (
        <div className={styles.productDetail}>
            <h1>{title}</h1>
            <div className={styles.productCard}>
                <img src={image} alt={title} />
                <p>{description}</p>
                <div>
                    <p>{price}</p>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;