import React from 'react';
import useCommonStore from '../store';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useCommonStore((state) => state.products);
  let filteredProducts = useCommonStore((state) => state.filteredProducts);

  const NoProducts = <div>No Results found , Please try using filters</div>;

  if (!filteredProducts) {
    return NoProducts;
  }

  return (
    <div className="grid md:grid-cols-4  sm:grid-cols-2 gap-8">
      {(filteredProducts.length === 0 ? products : filteredProducts).map((prod) => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Products;
