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
  width: 60%;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

export const Visible = styled(SplashScreen)`
  opacity: 1;
`;

export const Hidden = styled(SplashScreen)`
  opacity: 0;
  pointer-events: none;
  z-index: -1;
`;
