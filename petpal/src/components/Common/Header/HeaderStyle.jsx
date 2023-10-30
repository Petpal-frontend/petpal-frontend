import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 0 20px;
  background-color: white;
  width: inherit;
  height: 60px;
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
  font-size: var(--font-size-lg);
  letter-spacing: 0.02rem;
  font-weight: 700;
  margin: 0 auto;
`;
