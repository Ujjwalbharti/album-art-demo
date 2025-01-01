import { useShoppingCart } from '@/context/ShopingCartContext';
import React from 'react';


const CheckoutForm = () => {

    const cartInfo = useShoppingCart();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cartInfo.checkout();
    (event.target as HTMLFormElement).submit();
  };

  return (
    <form action="/" method="" onSubmit={handleSubmit}>
      <button 
        type="submit" 
        className='block bg-gray-700 text-white text-sm sm:text-xl p-2 sm:p-3 rounded-lg'>
        Checkout
      </button>
    </form>
  );
};

export default CheckoutForm;
