'use client';

import Image from "next/image"
import Link from "next/link"
import logo from '@/../public/images/logo.png'
import { useShoppingCart } from "@/context/ShopingCartContext"
import React from "react";


interface SiteHeaderProps {
    pathName: string
}


const SiteHeader: React.FC<SiteHeaderProps> = ({ pathName }) => {
    const shoppingCartData = useShoppingCart();
    const isActive = (path: string) => pathName === path;

    return (
        <div className="bg-white h-[7%] border-b border-b-gray-500 fixed top-0 w-full">
            <div className='h-full px-2 py-1 flex font-sans text-gray-600 text-xl items-center'>
                <Image src={logo} alt='logo' className='object-center h-full w-[20%] sm:w-[10%]' />
                <Link href="/">
                    <button className={`mx-3 ${isActive("/") ? "text-gray-700 font-extrabold" : ""}`}>Home</button>
                </Link>
                <Link href="/catalog">
                    <button className={`mx-3 ${isActive("/catalog") ? "text-gray-700 font-extrabold" : ""}`}>Catalog</button>
                </Link>
                <div className="mx-3 relative">
                    <Link href="/cart">
                        <button className={`relative z-10 ${isActive("/cart") ? "text-gray-700 font-extrabold" : ""}`}>Cart</button>
                    </Link>
                    {shoppingCartData.cart.length > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6  text-white text-xs font-bold bg-pink-400 rounded-full p-1 transform translate-x-1/2 -translate-y-1/2">
                            {shoppingCartData.cart.length}
                        </span>

                    )}
                </div>
            </div>
        </div>
    )
}

export default SiteHeader;