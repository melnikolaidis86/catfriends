import React from 'react';

const SearchBox = ({ handleChange }) => (
  <div className="pa2">
    <input
        aria-label="Search for Cats"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search for Cats"
        onChange={ handleChange } />
  </div>
);

export default SearchBox;
