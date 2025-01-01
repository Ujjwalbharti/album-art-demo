'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import { ProductCheckoutInfo } from '@/model/models';

interface ShoppingCartContextType {
    cart: ProductCheckoutInfo[];
    removeFromCart: (proudct: ProductCheckoutInfo) => void;
    updateCart: (proudct: ProductCheckoutInfo) => void;
    checkout: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<ProductCheckoutInfo[]>([]);

    function removeFromCart(product : ProductCheckoutInfo){
        const data = cart;
        const resultData : ProductCheckoutInfo[] = [];
        data.forEach(prd => {
            if(prd.id !== product.id){
                resultData.push(prd);
            }else{
                product.count = product.count - 1;
                if(product.count != 0){
                    resultData.push(product)
                }
            }
        });
        setCart(resultData)
    }

    function updateCart(product : ProductCheckoutInfo){
        const data = cart;
        const resultData : ProductCheckoutInfo[] = [];
        let found = false
        data.forEach(prd => {
            if(prd.id !== product.id){
                resultData.push(prd);
            }else{
                product.count = product.count + 1;
                resultData.push(product)
                found = true
            }
        });
        if( !found ){
            resultData.push(product)
        }
        setCart(resultData)
    }

    function checkout(){
        setCart([])
    }

    return (
        <ShoppingCartContext.Provider value={{ cart, removeFromCart, updateCart, checkout }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export function useShoppingCart() {
    const context = useContext(ShoppingCartContext);

    if (!context) {
        throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
    }

    return context;
}
