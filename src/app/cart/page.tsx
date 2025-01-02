'use client';

import CheckoutProductInfo from '@/components/CheckoutProductInfo';
import SiteHeader from '@/components/SiteHeader';
import { useShoppingCart } from '@/context/ShopingCartContext';
import { ProductCheckoutInfo } from '@/model/models';
import Image from 'next/image';
import Link from 'next/link';
import {
    divinity,
    synchronicity,
    theUndertaking,
    asTheSunSpeaks
} from '@/../public/images/albums'
import { ProductUtils } from '@/utils/utils';
import CheckoutForm from '@/components/CheckoutForm';

export default function CartInfo() {
    function getCartData() {
        if (cartInfo.cart.length > 0) {
            return (<div className='sm:w-[65%]'>
                {cartInfo.cart.map((product: ProductCheckoutInfo, index: number) => (
                    <CheckoutProductInfo productInfo={product} key={index} />
                ))}
            </div>);
        }
        return (
            <div className='h-[93%] flex flex-col items-start justify-start w-full font-sans'>
                <span className='block font-bold text-xl text-gray-500 m-5'>Cart is empty...</span>
                <div className="w-full h-[32%] flex justify-center items-center">
                    <div className='border-t border-b border-black h-[85%] w-full sm:w-[95%] flex justify-center items-center'>
                        <div className='h-[90%] flex w-full justify-between sm:justify-center items-center'>
                            <Image src={divinity} alt='divinity' className='h-[65%] sm:h-full object-fill w-[19%] sm:w-[15%] p-0 sm:px-2' />
                            <Image src={synchronicity} alt='synchronicity' className='h-[65%] sm:h-full object-fill w-[19%] sm:w-[15%] p-0 sm:px-2' />
                            <div className='h-[65%] sm:h-full font-sans text-gray-600 text-[10px] sm:text-3xl p-0 sm:px-3 flex flex-col items-center justify-center mt-2 sm:mt-0 w-[19%] sm:w-[25%]'>
                                <div className='block'>Your
                                    <span className='text-pink-500'> Album</span> And
                                    <span className='text-pink-500'> Artist</span> Name
                                </div>
                                <div className='block'>on<span className='text-pink-500'> Custom</span> Album Designs</div>
                                <div className='block mt-1 sm:mt-3 bg-pink-500 text-white hover:font-extrabold hover:bg-pink-700 text-[10px] sm:text-2xl border rounded-lg'>
                                    <Link href="/catalog">
                                        <button className='p-1 sm:p-2'>Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                            <Image src={theUndertaking} alt='theUndertaking' className='h-[65%] sm:h-full object-fill w-[19%] sm:w-[15%] p-0 sm:px-2' />
                            <Image src={asTheSunSpeaks} alt='asTheSunSpeaks' className='h-[65%] sm:h-full object-fill w-[19%] sm:w-[15%] p-0 sm:px-2' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    function getSummary() {
        if (cartInfo.cart.length > 0) {
            let totalCost = 0.0;
            cartInfo.cart.map((prd) => {
                const orgProduct = ProductUtils.getProductById(prd.id);
                totalCost += (prd.count * Number(orgProduct?.price))
            })
            totalCost = parseFloat(totalCost.toFixed(2));
            return (
                <div className='flex flex-col items-center justify-center sm:h-[60%] w-[98%] sm:w-[30%] font-sans border border-gray-300 bg-gray-100 m-1 sm:m-0 p-2'>
                    <span className='block text-gray-500 font-extrabold text-xl mb:3 sm:mb-5'>Checkout Summary</span>
                    <span className='block text-black font-extrabold text:sm text-xl mb-3 sm:mb-5'>Total Price : ${totalCost}</span>
                    <CheckoutForm />
                </div>
            );
        }
        return (<></>)
    }
    const cartInfo = useShoppingCart();
    return (
        <div className="h-full bg-gray-50">
            <SiteHeader pathName='/cart'/>
            <div className='h-[93%] flex flex-col sm:flex-row sm:justify-between'>
                {getCartData()}
                {getSummary()}
            </div>
        </div>

    )
}