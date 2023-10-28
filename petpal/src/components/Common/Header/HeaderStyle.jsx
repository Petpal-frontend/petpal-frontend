import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 0 30px;
  background-color: white;
  width: inherit;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
