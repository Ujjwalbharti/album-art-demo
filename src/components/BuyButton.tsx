'use client';

import { useShoppingCart } from "@/context/ShopingCartContext";
import { Product, ProductCheckoutInfo } from "@/model/models";
import React from "react";


interface ProductProps {
    product: Product;
}

const BuyButton: React.FC<ProductProps> = ({ product }) => {
    const shoppingCartData = useShoppingCart();
    function onClick() {
        const productInfo: ProductCheckoutInfo = {
            id: product._id,
            count: 1
        }
        shoppingCartData.updateCart(productInfo);
    }

    function getDisplayPurchaseButton() {
        const foundProduct = shoppingCartData.cart.find(data => data.id === product._id);
        if (!foundProduct) {
            return (<button className='p-3' onClick={onClick}>Add to cart</button>);
        }
        return (
            <div className="flex justify-center items-center font-mono">
                <button className="bg-slate-600 p-3 hover:text-red-700" onClick={() => shoppingCartData.removeFromCart(foundProduct)}>-</button>
                <span className="inline-block bg-slate-600 p-3">{foundProduct.count}</span>
                <button className="bg-slate-600 p-3 hover:text-green-700" onClick={() => shoppingCartData.updateCart(foundProduct)}>+</button>
            </div>
        );
    }

    return (
        <div className='text-white bg-blue-500 hover:bg-blue-600 border rounded-lg font-sans font-extrabold'>
            {getDisplayPurchaseButton()}
        </div>
    );


}

export default BuyButton