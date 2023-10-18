// SplashScreen.style.js

import styled from 'styled-components';

export const SplashScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffad0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 60%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export const HiddenSplashScreen = styled(SplashScreen)`
  pointer-events: none;
  z-index: -1;
`;
