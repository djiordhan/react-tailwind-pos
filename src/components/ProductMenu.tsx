import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductMenu = ({ searchKey, onSelect }: any) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);


    return <div className="h-full overflow-y-auto px-2">
    <div className="grid grid-cols-4 gap-4 pb-3">
        {
            products
                .filter((product: any) => !searchKey || product?.name?.toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                .map((product, index) => <ProductItem key={index} product={product} onSelect={onSelect}/>)
        }
    </div>
  </div>;
};

export default ProductMenu; 