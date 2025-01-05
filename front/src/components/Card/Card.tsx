import Link from 'next/link';
import Image from 'next/image';
import CardProps from '@/interfaces/CardProps';

export default function Card({
  name,
  price,
  image,
}: CardProps) {
  return (
    <div className="text-quaternaryColor bg-secondaryColor bg-opacity-70 text-center rounded-lg flex flex-col items-center transform hover:scale-110 hover:transition-all duration-1000 hover:bg-primaryColor p-2 w-80 h-96">
      <h3>{name}</h3>
      <div className='my-auto'>
        <Image src={image} alt={`${name}`} width={400} height={400} className='max-h-64 max-w-52'/>
      </div>
      <p className='mt-auto'>{price}</p>
      <Link href=""><button className='rounded-full bg-secondaryColor px-4 py-2'>ADD TO CART</button></Link>
    </div>
  );
};