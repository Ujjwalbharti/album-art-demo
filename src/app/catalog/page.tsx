import { Product } from '@/model/models';
import ProductDetails from '@/components/ProductDetails';
import SiteHeader from '@/components/SiteHeader';
import { ProductUtils } from '@/utils/utils';

export default function Catalog() {

    return (
        <div className="relative h-full">
            <SiteHeader pathName='/catalog'/>
            <div className='h-[7%]'></div>
            <div className='h-[93% flex flex-wrap justify-start bg-gray-50'>
                {ProductUtils.getAllProducts().map((product: Product, index: number) => (
                    <ProductDetails key={index} product={product} />
                ))}
            </div>
        </div>

    )
}