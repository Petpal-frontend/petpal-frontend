import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

export const AlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // color: black;
  background-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-in;
  z-index: 999;
  width: 520px;
  height: 100vh;
`;
