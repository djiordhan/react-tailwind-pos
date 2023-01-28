import React from 'react';
import ProductItem from './ProductItem';
import burger from '../assets/beef-burger.png';
import donut from '../assets/donut.png';
import rice from '../assets/rice.jpg';
import shrimp from '../assets/shrimp.jpg';
import steak from '../assets/steak.jpg';
import salad from '../assets/salad.jpg';

const products = [
    {
        name: 'Burger',
        image: burger,
        price: 50.00
    },
    {
        name: 'Donut',
        price: 20.00,
        image: donut
    },
    {
        name: 'Rice',
        image: rice,
        price: 40.00
    },
    {
        name: 'Shrimp',
        image: shrimp,
        price: 50.00
    },
    {
        name: 'Steak',
        image: steak,
        price: 20.00
    },
    {
        name: 'Salad',
        image: salad,
        price: 40.00
    }
];


const ProductMenu = ({ searchKey, onSelect }: any) => {
    return <div className="h-full overflow-y-auto px-2">
    <div className="grid grid-cols-4 gap-4 pb-3">
        {
            products
                .filter(product => !searchKey || product.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                .map((product, index) => <ProductItem key={index} product={product} onSelect={onSelect}/>)
        }
    </div>
  </div>;
};

export default ProductMenu; 