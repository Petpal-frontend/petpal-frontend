import styled from 'styled-components';

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
