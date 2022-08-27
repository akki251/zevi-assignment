import React from 'react';
import Products from './Products';
import Filter from './Filter';
import useCommonStore from '../store';

const Main = () => {
  const searchTerm = useCommonStore((state) => state.searchTerm);

  return (
    searchTerm.length !== 0 && (
      <div className="h-full bg-white p-4">
        <h3 className="text-2xl font-bold">Search results</h3>
        <div className="grid grid-cols-12 py-4 ">
          <div className=" col-span-3">
            <Filter />
          </div>
          <div className=" col-span-9">
            <Products />
          </div>
        </div>
      </div>
    )
  );
};

export default Main;
