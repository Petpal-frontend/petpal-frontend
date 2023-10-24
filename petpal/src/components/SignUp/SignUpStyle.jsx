import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 32px;
  margin-top: 75px;
`;

// 프로필 사진 설정
export const ProfileImgBox = styled.div`
  position: relative;
  margin: 39px 0 58px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img``;

export const ProfileUpload = styled.img`
  position: absolute;
  top: 98px;
  left: 98px;
`;

// 주소 검색
export const AddressBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-gray-76);
`;

export const AddressInput = styled.input`
  width: 397px;
  padding: 1em 0;
  border: none;
  &::placeholder {
    color: #dbdbdb;
    font-size: var(--font-size-l);
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
