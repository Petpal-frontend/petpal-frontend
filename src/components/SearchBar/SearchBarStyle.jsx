import styled from 'styled-components';

export const SearchBarInput = styled.input`
  width: 376px;
  height: 46px;
  font-size: 14px;
  border: 1px solid white;
  border-radius: 4px;
  filter: drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.05));
  text-indent: 16px;

  &.accountSearch {
    border-radius: 30px;
    background-color: #f2f2f2;
    width: 82%;
    color: #1e1e1e;
    font-size: 13px;
    font-weight: 500;
  }

  &.accountSearch::placeholder {
    color: #acacac;
    font-size: 13px;
    font-weight: 500;
  }
`;
