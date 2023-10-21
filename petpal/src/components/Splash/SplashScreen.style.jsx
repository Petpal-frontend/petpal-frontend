import styled from 'styled-components';

export const SplashScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 100vh;
  margin: auto;
  position: fixed;
  background-color: #fffad0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: ${({ isVisible }) => (isVisible ? 1 : -1)};
  transition: all 1s ease-in-out;
`;
