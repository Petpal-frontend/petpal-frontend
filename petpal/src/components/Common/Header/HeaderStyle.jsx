import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
  width: inherit;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 18px;
  letter-spacing: 0.02rem;
  font-weight: 700;
  margin: 0 auto;
`;
