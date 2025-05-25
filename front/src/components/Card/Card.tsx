import Image from 'next/image';
import { IProduct } from '@/interfaces/Product';
import AddProduct from '../AddProduct';
import Link from 'next/link';

export default function Card({ product }: { product: IProduct }) {
  const { name, price, image } = product;

  return (
    <div className="text-quaternaryColor bg-secondaryColor bg-opacity-70 text-center rounded-lg flex flex-col items-center transform group hover:scale-110 hover:transition-all duration-1000 hover:bg-primaryColor hover:bg-opacity-80 h-72 w-auto md:w-60  md:h-80 lg:w-80 lg:h-96 relative lg:static">
      <h3 className='border-b-tertiaryColor border-b-2 md:mt-1 md:mb-2 md:text-lg lg:text-xl'>{name}</h3>
      <Image src={image} alt={`${name}`} width={400} height={400} className='max-w-36 max-h-40 md:max-h-48 md:max-w-44 lg:max-h-56 my-auto' />
      <Link href={`/products/${product.id}`} className=' mb-16 mt-1 md:mt-1 lg:mb-1 text-transparent rounded-3xl px-2 group-hover:text-primaryColor group-hover:bg-tertiaryColor'>Full Product</Link>
      <p className=' absolute lg:static bottom-12 lg:mb-0'>${price}</p>
      <div className='my-1 bg-secondaryColor rounded-full py-2 px-3 w-fit absolute bottom-1 lg:static lg:mb-2'>
        <AddProduct product={product}/>
      </div>
    </div>
  );
};