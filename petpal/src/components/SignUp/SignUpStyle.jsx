import styled from 'styled-components';
import { Link } from 'react-router-dom';


// 프로필 사진 설정
export const ProfileImgBox = styled.div`
  position: relative;
  margin: 40px 0;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const ProfileImg = styled.img`
  width: 110px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const ProfileUpload = styled.img`
  cursor: pointer;
  position: absolute;
  width: 40px;
  top: 74px;
  left: 74px;
`;

// 주소 검색
export const AddressBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const AddressInput = styled.input`
  width: 397px;
  padding: 1em 0;
  border: none;
  &::placeholder {
    color: #dbdbdb;
    font-size: var(--font-size-lg);
  }
  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 13px;
  left: 388px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  &::before {
    content: '';
    display: block;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    background: url(/images/icon-search.svg);
  }
`;

export const Search = styled.span`
  &.a11yHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;

// 링크
export const LinkWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 5px;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray-light);
  &::after {
    content: '|';
    cursor: default;
    margin-left: 5px;
  }
`;

export const MainLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray-light);
`;
