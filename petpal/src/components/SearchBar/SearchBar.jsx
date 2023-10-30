import React from 'react';
import styled from 'styled-components';
import { SearchBarInput } from './SearchBarStyle';

const SearchBar = ({ placeholder, onChange, className }) => {
  return (
    <SearchBarInput
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

export default SearchBar;
