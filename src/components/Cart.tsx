import React from 'react';
import CartItem from './CartItem';

const Cart = ({ items, onCartUpdate }: any) => {

    return <div className="flex-1 w-full px-4 overflow-auto">
        {
            items && 
            items.map((cartItem: any, index: number) => 
            <CartItem 
                key={index}
                cartItem={cartItem}
                onQuantityChange={(newQuantity: number) => {
                    cartItem.quantity = newQuantity;
                    items[index] = cartItem;
                    onCartUpdate([...items]);
                }}/>)
        }
        
  </div>
};

export default Cart;