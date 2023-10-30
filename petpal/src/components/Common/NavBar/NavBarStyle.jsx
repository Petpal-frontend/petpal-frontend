import styled from 'styled-components';

export const NavBarWrap = styled.nav`
  width: clamp(320px, 100%, 520px);
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  pointer-events: auto; /* 모달 배경을 선택 가능하게 만듦 */
`;
