import React from 'react';
import './coponent.styless.css';

const Search = ({ placeholder, handeleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handeleChange}
  />
);

export default Search;
