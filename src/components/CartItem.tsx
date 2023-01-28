import React, { useState, useEffect } from 'react';

const CartItem = ({ cartItem, onQuantityChange }: any) => {

    return <div className="select-none mb-3 bg-blue-gray-50 rounded-lg w-full text-blue-gray-700 py-2 px-2 flex justify-center">
    <img className="rounded-lg h-10 w-10 bg-white shadow mr-2" src={cartItem.product.image} />
    <div className="flex-grow">
      <h5 className="text-sm">{cartItem.product.name}</h5>
      <p className="text-xs block">PHP {cartItem.product.price}</p>
    </div>
    <div className="py-1">
      <div className="w-28 grid grid-cols-3 gap-2 ml-2">
        <button onClick={() => {
            const qty = +cartItem.quantity <= 0 ? 0 : cartItem.quantity - 1
            onQuantityChange(qty);
        }} className="rounded-lg text-center py-1 text-white bg-blue-gray-600 hover:bg-blue-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
          </svg>
        </button>
        <input value={cartItem.quantity} onChange={event => {
            const qty = +event.target.value;
            onQuantityChange(qty);
        }} type="number" className="bg-white rounded-lg text-center shadow focus:outline-none focus:shadow-lg text-sm" />
        <button onClick={() => {
            const qty = +cartItem.quantity + 1
            onQuantityChange(qty);
        }} className="rounded-lg text-center py-1 text-white bg-blue-gray-600 hover:bg-blue-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>;
};

export default CartItem;