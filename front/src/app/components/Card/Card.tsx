import Link from 'next/link';
import Image from 'next/image';

//types
import { Product } from '../../interfaces/Product';

const Card: React.FC<Product> = ({ name, image, price, id }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="text-quaternaryColor bg-transparent text-center rounded-lg flex flex-col items-center transform hover:scale-110 hover:transition-all duration-1000 hover:bg-primaryColor p-2 w-80 h-auto">
        <h2>{name}</h2>
        <div style={{position: 'relative', objectFit: 'contain'}}>{<Image src={image} width={200} height={300} alt={name} sizes="300px"/>}</div>
        <p>Price: {price}</p>
      </div>
    </Link>
  );
};

export default Card;