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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-700 m-1 sm:m-3 w-[98%] sm:w-full">
            <Link href={`/catalog/product-info/${product?._id}`}>
                <Image
                    src={`/images/albums/${product?.imageName}`}
                    alt={product?.title || ""}
                    className='object-contain m-2'
                    width={150}
                    height={150}
                />
            </Link>
            <div className="flex flex-col justify-center sm:w-[45%] p-2 text-lg font-sans">
                <span className="block text-gray-600 font-bold">{product?.title}</span>
                <span className="block font-extrabold">{`$${product?.price}`}</span>
                <span className="block text-gray-500">{product?.description}</span>
            </div>
            <div className="flex sm:w-[30%] p-2 items-center justify-center text-white font-extrabold text-xl font-mono">
                <BuyButton product={product as Product} />
            </div>
        </div>
    );
}

export default CheckoutProductInfo;