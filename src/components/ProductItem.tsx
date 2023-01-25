import React from 'react';
import burger from '../assets/beef-burger.png';

const ProductItem = ({ name, price }: any) => {
    return <div role="button" className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg" title="Beef Burger">
            <img src={burger} alt="Beef Burger" />
            <div className="flex pb-3 px-3 text-sm -mt-3">
            <p className="flex-grow truncate mr-1">{name}</p>
            <p className="nowrap font-semibold">PHP {price}</p>
            </div>
        </div>;
};

export default ProductItem; 