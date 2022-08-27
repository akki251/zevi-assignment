import React from 'react';
import useCommonStore from '../store';

const Filter = () => {
  const products = useCommonStore((state) => state.products);


  
  return <div className=" h-full bg-white  ">Filter</div>;
};

export default Filter;
