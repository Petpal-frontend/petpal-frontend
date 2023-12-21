import React, { useState, useEffect } from 'react';
import { StyledLayout } from '../../components/Search/SearchStyle';
import Header from '../../components/Common/Header/Header';
import Search from '../../components/Search/Search';
import NavBar from '../../components/Common/NavBar/NavBar';
import { getUserList } from '../../api/searchApi';
import useDebounce from '../../hooks/useDebounce';

export default function SearchPage() {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);

  const debouncedSearchText = useDebounce(inputValue, 300);

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserList(debouncedSearchText);
      setUsers(data);
    };

    fetchData();
  }, [debouncedSearchText]);

  const filteredUsers = users.filter(
    v =>
      v.username.includes(debouncedSearchText) &&
      v.accountname.includes('petpal_'),
  );

  return (
    <StyledLayout>
      <Header type="search" onChange={handleChangeInput} />
      <Search users={filteredUsers} inputValue={debouncedSearchText} />
      <NavBar />
    </StyledLayout>
  );
}
