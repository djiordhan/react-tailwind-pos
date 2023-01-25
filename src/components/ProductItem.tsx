import React from 'react';
import burger from '../assets/beef-burger.png';

const ProductItem = ({ product, onSelect }: any) => {
    return <div role="button" 
            onClick={() => { 
                onSelect(product);
            }} className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg">
            <img src={burger} alt="Beef Burger" />
            <div className="flex pb-3 px-3 text-sm -mt-3">
            <p className="flex-grow truncate mr-1">{product.name}</p>
            <p className="nowrap font-semibold">PHP {product.price}</p>
            </div>
        </div>;
};

export default ProductItem; 