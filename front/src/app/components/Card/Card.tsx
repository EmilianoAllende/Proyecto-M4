import Link from 'next/link';

//types
import { Product } from './types';

const Card: React.FC<Product> = ({ title, image, price, id }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="text-quaternaryColor bg-transparent text-center rounded-lg flex flex-col items-center transform hover:scale-110 hover:transition-all duration-1000 hover:bg-primaryColor p-2 w-80 h-48">
        <h2>{title}</h2>
        {image.map((img, index) => (
          <img className="h-auto w-32" key={index} src={img} alt={`${title} image ${index + 1}`} />
        ))}
        <p>Price: {price}</p>
      </div>
    </Link>
  );
};

export default Card;