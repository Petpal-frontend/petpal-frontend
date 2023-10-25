import styled from 'styled-components';

export const StyledLayout = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;

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
export const PrevBtn = styled.p`
  a {
    display: block;
    padding: 30px;
    border: none;
    background-color: transparent;
    background-image: url('./images/prev.svg');
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
export const MoreBtn = styled.button`
  padding: 30px;
  border: none;
  background-color: transparent;
  background-image: url('./images/icon-more-vertical2.svg');
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export const MainWrap = styled.div`
  ul {
    // navBar(60px) + gap(40px) == 100px
    padding: 22px 15px 100px;
    // display: grid;
    // grid-template-columns: repeat(2, minmax(0, 1fr));
    // gap: 40px 18px;
  }
`;
export const ProductLi = styled.li`
  margin-bottom: 20px;
  color: #767676;

  a {
    display: flex;
    gap: 11px;
  }

  .profileImg {
    display: block;
    width: 50px;
    height: 50px;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
  }

  .profileImg img {
    border-radius: 25px;
    width: 100%;
  }

  .text {
    width: calc(100% - 123px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-weight: 500;
  }

  .text strong {
    display: block;
    color: #1e1e1e;
    font-size: 14px;
    font-weight: 600;
  }

  .text .chat {
    display: block;
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date {
    align-self: center;
    font-size: 0.625rem;
  }

  &.newMessage .profileImg::after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background-color: #f15846;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
  }
`;

export const NavBarWrap = styled.nav`
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
