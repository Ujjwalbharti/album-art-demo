'use client';

import BuyButton from "@/components/BuyButton";
import SiteHeader from "@/components/SiteHeader";
import { useShoppingCart } from "@/context/ShopingCartContext";
import { Product } from "@/model/models";
import Image from "next/image";
import Link from "next/link";

interface ProductInfoProps {
    product: Product
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {

    const shoppingCartData = useShoppingCart();

    function getDisplayPurchaseButton(product: Product) {
        const foundProduct = shoppingCartData.cart.find((prd) => prd.id === product._id);
        if (foundProduct) {
            return (<Link href="/cart" className="block border rounded-lg bg-blue-500 text-white p-3 font-bold">Proceed to checkout</Link>);
        }
        return (<></>);
    }

    return (
        <div className="h-full">
            <SiteHeader />
            <div className="sm:flex sm:flex-row flex-col w-full">
                <div className="flex flex-col sm:w-[65%] justify-center items-center">
                    <div className="sm:flex sm:flex-row flex-col w-full m-5">
                        <Image
                            src={`/images/albums/${product?.imageName}`}
                            alt={product?.title || ""}
                            className='object-contain p-3'
                            width={325}
                            height={325}
                        />
                        <div className="flex flex-col p-3 font-mono text-2xl">
                            <span className="block p-2 text-gray-500 font-extrabold">{product?.title}</span>
                            <span className="block p-2 font-extrabold">{`$${product?.price}`}</span>
                            <span className="block p-3 text-gray-600 font-bold text-xl">{product?.description}</span>
                        </div>
                    </div>
                    <div>
                        <span className="block p-3 font-serif text-gray-700 font-normal text-xl">{product?.detailedDescription}</span>
                    </div>
                </div>
                <div className="sm:w-[30%] flex flex-col justify-center items-center gap-3">
                    <BuyButton product={product} />
                    {getDisplayPurchaseButton(product)}
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;