import styled from 'styled-components';

export const SplashBg = styled.div`
  width: calc(100% + 30px);
  height: 100vh;
  background-color: #fffad0;
  margin: 0 0 0 -15px;
  animation: fadein 1.5s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const SplashLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
