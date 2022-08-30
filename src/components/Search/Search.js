import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';
const Search = () => {
  return (
    <div>
      <div className='container'>
        <div className='search__contentWrapper'>
          <div className='search_inputBox'>
            <input
              type='search'
              name=''
              className='search__input'
              id=''
              placeholder='Search'
            />
            <FaSearch className='search__icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
