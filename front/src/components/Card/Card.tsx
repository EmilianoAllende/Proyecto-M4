import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  name: string;
  image: string;
  price: number;
  stock: number;
  description: string;
};

export default function Card({
  name,
  price,
  image,
  description,
  stock,
}: CardProps) {
  return (
    <div className="text-quaternaryColor bg-transparent text-center rounded-lg flex flex-col items-center transform hover:scale-110 hover:transition-all duration-1000 hover:bg-primaryColor p-2 w-80 h-auto">
      <h3>{name}</h3>
      <div>
        <Image src={image} alt={`${name}`}/>
        <p>{description}</p>
      </div>
      <span>Stock: {stock}</span>
      <p>{price}</p>
      <Link href=""><button>ADD TO CART</button></Link>
    </div>
  );
};