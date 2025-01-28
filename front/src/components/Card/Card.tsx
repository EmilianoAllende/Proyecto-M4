import Image from 'next/image';
import { IProduct } from '@/interfaces/Product';
import AddProduct from '../AddProduct';
import Link from 'next/link';

export default function Card({ product }: { product: IProduct }) {
  const { name, price, image } = product;

  return (
    <div className="text-quaternaryColor bg-secondaryColor bg-opacity-70 text-center rounded-lg flex flex-col items-center transform hover:scale-110 hover:transition-all duration-1000 hover:bg-primaryColor p-2 w-80 h-96">
      <Link href={`/products/${product.id}`}>
        <div>
          <h3 className='mb-auto'>{name}</h3>

            <Image src={image} alt={`${name}`} width={400} height={400} className='max-h-64 max-w-52 my-auto' />
            <p className='mt-auto'>${price}</p>

        </div>
      </Link>
      <div className='mt-auto mb-4'>
        <AddProduct product={product}/>
      </div>
    </div>
  );
};