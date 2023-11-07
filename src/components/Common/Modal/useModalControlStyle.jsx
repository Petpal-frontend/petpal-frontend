import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const moveTop = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  // position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // background-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-in;
  z-index: 999;
  // width: 520px;
  max-width: 520px;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  width: 100%;
  animation: ${moveTop} 0.8s ease-in-out forwards;
`;
