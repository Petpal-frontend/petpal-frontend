import styled, { css } from 'styled-components';
import hamburgerBtn from '../../../assets/image/hamburger.svg';
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: white;
  width: inherit;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 10;

  ${props => {
    switch (props.type) {
      case 'walk':
        return css`
          position: fixed;
          top: 0;
          z-index: 10;
        `;
      default:
        return css`
          background-color:;
        `;
    }
  }};
`;

export const HeaderTitleSpan = styled.span`
  color: #000000;
  font-size: var(--font-size-lg);
  letter-spacing: 0.02rem;
  font-weight: 700;
  margin: 0 auto;
`;

export const PostStyle = styled.article`
  position: relative;

  .postMoreButton {
    position: absolute;
    top: -12px;
    right: 8px;
    width: 18px;
    height: 27px;
    background: url(${hamburgerBtn}) no-repeat center / auto 100%;
    cursor: pointer;
    border: none;
  }
`;
