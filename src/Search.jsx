import React from 'react';

const handleTagSearch = (tag) => {
  console.log('searching')
};

const Search = () => (
  <form className='search'>
    <label htmlFor='entry-search'>Search by entry:</label>
    <input className='entry-search' id='entry-search'></input>
    <label htmlFor='tag-search'>Search by tag:</label>
    <input className='tag-search' id='tag-search'></input>
  </form>
);

export default Search;