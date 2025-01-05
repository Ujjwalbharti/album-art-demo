import { Product } from '@/model/models';
import Image from 'next/image';
import Link from 'next/link';
import BuyButton from './BuyButton';

interface ProductProps {
    product: Product;
}

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className='my-4 flex flex-col items-center w-[125px] sm:w-[200px] md:w-[225px] lg:w-[325px]'>
            <Link href={`/catalog/product-info/${product._id}`}>
                <Image
                    src={`/images/albums/${product.imageName}`}
                    alt={product.title}
                    className='object-contain w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px]'
                    width={300}
                    height={300}
                />
            </Link>
            <span className='block font-serif text-gray-700 text-sm sm:text-xl'>{product.title}</span>
            <span className='block font-mono font-bold'>${product.price}</span>
            <BuyButton product={product}/>
        </div>
    );
};

export default ProductDetails;
