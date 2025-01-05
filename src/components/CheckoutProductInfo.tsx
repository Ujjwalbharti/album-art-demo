
import { Product, ProductCheckoutInfo } from "@/model/models";
import { ProductUtils } from "@/utils/utils";
import Image from "next/image";
import BuyButton from "./BuyButton";
import Link from "next/link";

interface CheckoutProps {
    productInfo: ProductCheckoutInfo;
}

const CheckoutProductInfo: React.FC<CheckoutProps> = ({ productInfo }) => {
    const product = ProductUtils.getProductById(productInfo.id)
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center m-1 sm:m-3 w-[98%] sm:w-full">
            <div className="flex justify-start gap-3 sm:gap-5 w-full sm:w-[80%]">
                <Link href={`/catalog/product-info/${product?._id}`} className="block m-2 w-[80px] h-[80px] sm:w-[120px] sm:h-[100px] md:w-[150px] md:h-[120px] lg:w-[150px] lg:h-[150px]">
                    <Image
                        src={`/images/albums/${product?.imageName}`}
                        alt={product?.title || ""}
                        className='object-contain  w-full h-full'
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="flex flex-col justify-start p-2 text-lg font-sans w-[70%]">
                    <span className="block text-gray-600 font-bold">{product?.title}</span>
                    <span className="block font-extrabold">{`$${product?.price}`}</span>
                    <span className="sm:block text-gray-500 hidden">{product?.description}</span>
                </div>
            </div>
            <div className="flex sm:w-[20%] p-2 items-center justify-center text-white font-extrabold text-xl font-mono">
                <BuyButton product={product as Product} />
            </div>
        </div>
    );
}

export default CheckoutProductInfo;