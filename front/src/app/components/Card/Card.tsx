import Link from 'next/link';

//types
import { Product } from './types';

//styles
import styles from './Card.module.css'

const Card: React.FC<Product> = ({ title, image, price, id }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={styles.card}>
        <h2>{title}</h2>
        {image.map((img, index) => (
          <img className={styles.productIMG} key={index} src={img} alt={`${title} image ${index + 1}`} />
        ))}
        <p>Price: {price}</p>
      </div>
    </Link>
  );
};

export default Card;