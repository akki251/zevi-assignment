import React from 'react';
import useCommonStore from '../store';
import StarRatings from 'react-star-ratings';
const Filter = () => {
  const products = useCommonStore((state) => state.products);

  let brands = products.map((item) => item.brand);
  brands = [...new Set(brands)];
  const stars = [1, 2, 3, 4, 5].reverse();

  return (
    <div className=" h-full bg-white flex flex-col space-y-3 ">
      {/* Brands */}
      <div className="flex flex-col space-y-3 border-b border-gray-200 w-3/4 py-3 ">
        <h1 className="text-xl font-semibold mb-1">BRAND</h1>
        {brands.map((brand) => (
          <div className="flex items-center space-x-2  " key={brand}>
            <input type="checkbox" name={brand} id={brand} />
            <label className="text-md font-normal" htmlFor={brand}>
              {brand}
            </label>
          </div>
        ))}
      </div>
      {/* Price range */}
      <div className="flex flex-col space-y-3 border-b border-gray-200 w-3/4 py-3">
        <h1 className="text-xl font-semibold mb-1">PRICE RANGE</h1>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="500" name="500" />
          <label htmlFor="500">Under 500</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="1000" name="1000" />
          <label htmlFor="1000">Under 1000 To 3000</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="3000" name="3000" />
          <label htmlFor="3000">Under 3000 To 5000</label>
        </div>
      </div>
      {/* Ratings */}
      <div className="flex flex-col space-y-3 border-b border-gray-200 w-3/4 py-3">
        <h1 className="text-xl font-semibold mb-1">Ratings</h1>
        {stars.map((item) => (
          <div key={item} className="flex  items-center space-x-2">
            <input type="checkbox" id={item} name={item} />
            <label htmlFor={item}>
              <StarRatings
                rating={item}
                starRatedColor="yellow"
                starDimension="20px"
                starSpacing="5px"
                numberOfStars={5}
                name="rating"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
