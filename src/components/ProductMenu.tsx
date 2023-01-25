import React from 'react';
import ProductItem from './ProductItem';

const products = [
    {
        name: 'Burger',
        price: 50.00
    },
    {
        name: 'Donut',
        price: 20.00
    },
    {
        name: 'Fries',
        price: 40.00
    },
    {
        name: 'Burger 2',
        price: 50.00
    },
    {
        name: 'Donut 2',
        price: 20.00
    },
    {
        name: 'Fries 2',
        price: 40.00
    },
    {
        name: 'Burger 3',
        price: 50.00
    },
    {
        name: 'Donut 3',
        price: 20.00
    },
    {
        name: 'Fries 3',
        price: 40.00
    }    
];


const ProductMenu = ({ searchKey }: any) => {
    return <div className="h-full overflow-y-auto px-2">
    <div className="grid grid-cols-4 gap-4 pb-3">
        {
            products
                .filter(product => !searchKey || product.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                .map(product => <ProductItem name={product.name} price={product.price}/>)
        }
    </div>
  </div>;
};

export default ProductMenu; 