import styled from 'styled-components';

export const SplashBg = styled.div`
  position: relative;
  // width: 520px;
  // min-height: 940px;
  max-width: 520px;
  width: 100%;
  min-height: 100vh;

  background-color: #fffad0;
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
