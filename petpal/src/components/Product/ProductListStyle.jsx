import styled from 'styled-components';

export const StyledLayout = styled.div`
  //   height: 100vh;
  position: relative;
`;

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
export const PrevBtn = styled.button`
  padding: 30px;
  border: none;
  background-color: transparent;
  background-image: url('./images/prev.svg');
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;
export const HeaderContent = styled.h2`
  font-size: 18px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const MainWrap = styled.div`
  ul {
    // navBar(60px) + gap(40px) == 100px
    padding: 16px 16px 100px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px 18px;
  }
`;
export const ProductLi = styled.li`
  a {
    text-decoration: none;
  }

  .productImg {
    // width: 170px;
    // height: 114px;
    aspect-ratio: 170/114;
    margin-bottom: 18px;
  }

  .productImg img {
    width: 100%;
    height: 100%;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    object-fit: cover;
  }

  .productTitle,
  .productDesc,
  .productPrice {
    display: block;
  }

  .productTitle {
    margin-bottom: 11px;
    color: #1e1e1e;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .productDesc {
    line-height: 18px;
    margin-bottom: 13px;
    color: #535353;
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .productPrice {
    color: #070707;
    font-size: 15px;
    font-weight: 600;
  }
  .productPrice span {
    font-weight: 800;
  }
`;
// export const ProductImg = styled.img``;
// export const ProductInfo = styled.p``;

export const NavBarWrap = styled.nav`
  //   width: 520px;
  width: clamp(320px, 100%, 767px);
  height: 60px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
`;
export const NavBarUl = styled.ul`
  display: flex;
  align-items: center;
  background-color: #fff;

  li {
    width: 20%;
  }

  li a {
    padding: 11px 0;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`;
export const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const IconInfo = styled.span`
  color: #242424;
  font-size: 10px;
`;

export const AddBtn = styled.p`
  width: 92px;
  height: 43px;
  border-radius: 30px;
  background-color: #ffe769;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  right: 20px;
  bottom: 106px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: none;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-image: url('./images/icon-plus.svg');
    background-repeat: no-repeat;
    background-size: 10px 10px;
  }

  @media all and (min-width: 768px) {
    right: calc(50% - 364px);
  }
`;
