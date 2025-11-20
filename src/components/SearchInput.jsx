import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchInput = ({ searchTerm, setSearchTerm, activeMenuItem }) => {
  const placeholderText = activeMenuItem === 'Search' 
    ? "Search all tasks..." 
    : "Search...";

  return (
    <div className="search-input-container">
      <IoSearchOutline style={{ color: '#6c757d' }} />
      <input 
        type="text" 
        placeholder={placeholderText} 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        disabled={activeMenuItem && activeMenuItem !== 'Search'}
      />
    </div>
  );
};

export default SearchInput;