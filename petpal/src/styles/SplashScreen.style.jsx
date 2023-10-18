import styled from 'styled-components';

export const SplashScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffad0;
  position: fixed;
  margin: auto;
  width: 50%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;
// display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};

export const HiddenSplashScreen = styled(SplashScreen)`
  pointer-events: none;
  z-index: -1;
`;
