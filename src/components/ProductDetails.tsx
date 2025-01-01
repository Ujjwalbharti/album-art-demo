import { Product } from '@/model/models';
import Image from 'next/image';
import Link from 'next/link';
import BuyButton from './BuyButton';

interface ProductProps {
    product: Product;
}

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className='my-4 ml-4 flex flex-col items-center'>
            <Link href={`/catalog/product-info/${product._id}`}>
                <Image
                    src={`/images/albums/${product.imageName}`}
                    alt={product.title}
                    className='object-contain'
                    width={325}
                    height={325}
                />
            </Link>
            <span className='block font-serif text-gray-700 text-xl'>{product.title}</span>
            <span className='block font-mono font-bold'>${product.price}</span>
            <BuyButton product={product} />
        </div>
    );
};

export default ProductDetails;
