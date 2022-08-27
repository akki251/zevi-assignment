import React from 'react';
import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import logo from '../assets/zevi logo.png';
import { getSuggestions } from './api';
const SearchBar = () => {
  const [isSuggestions, setIsSuggestions] = useState(false);

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSuggestions().then((suggestions) => setSuggestions(suggestions));
  }, []);

  return (
    <div className="h-full bg-black bg-opacity-20 p-8">
      {/* logo */}
      <div>
        <img src={logo} className="w-[70px] ml-auto" alt="zevi logo" />
      </div>
      {/* search input  */}
      <div className="flex justify-between items-center max-w-md mt-10 p-3 space-x-4 rounded-lg shadow-md mx-auto bg-white">
        <input
          onFocus={() => setIsSuggestions(true)}
          onBlur={() => setIsSuggestions(false)}
          type="text"
          className="outline-none focus:p-1 transition-all duration-150 ease-in border-none text-md font-semibold text-gray-500 w-full"
          placeholder="H&M Crop top..."
        />
        <BiSearch size={20} />
      </div>
      {/* Suggestions */}
      {isSuggestions && (
        <div className="max-w-3xl mx-auto mt-5 rounded-md  bg-white p-5 px-8 shadow-2xl  ">
          <h3 className="mb-3 text-xl font-semibold">Latest Trends</h3>
          <div className="flex space-x-8">
            {suggestions.map((item) => (
              <div key={item?.id}>
                <div>
                  <img
                    src={item?.image.url}
                    alt={item?.name}
                    className=" inline-block rounded-md max-w-full   object-cover"
                  />
                </div>
                <p className="mt-2 font-medium text-xs"> {item?.name} </p>
              </div>
            ))}
          </div>
          <h2 className="font-semibold text-md mt-5">Popular Suggestions</h2>
          {suggestions.map((item) => (
            <div key={item?.id}>
              <p className="mt-2 font-medium text-xs"> {item?.name} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
