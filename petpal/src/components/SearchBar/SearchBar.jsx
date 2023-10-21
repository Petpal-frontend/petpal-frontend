import React from 'react';
import styled from 'styled-components';
import { SearchBarInput } from './SearchBarStyle';

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <SearchBarInput type="text" placeholder={placeholder} onChange={onChange} />
  );
};

export default SearchBar;
