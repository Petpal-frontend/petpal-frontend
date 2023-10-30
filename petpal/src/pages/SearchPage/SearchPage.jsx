import React, { useState } from 'react';
import { StyledLayout } from '../../components/Search/SearchStyle';
import Header from '../../components/Common/Header/Header';
import Search from '../../components/Search/Search';
import NavBar from '../../components/Common/NavBar/NavBar';

export default function SearchPage() {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };

  return (
    <StyledLayout>
      <Header type="search" onChange={handleChangeInput} />
      <Search />
      <NavBar />
    </StyledLayout>
  );
}
