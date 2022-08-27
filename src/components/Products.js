import React from 'react';
import useCommonStore from '../store';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useCommonStore((state) => state.products);

  return (
    <div className="grid md:grid-cols-4  sm:grid-cols-2 gap-8">
      {products.map((prod) => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Products;
