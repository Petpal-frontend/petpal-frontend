import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function useModalControl() {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const ModalComponent = ({ children }) => {
    return (
      <>
        {modalState && (
          <ModalContainer onClick={closeModal}>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        )}
      </>
    );
  };

  return { openModal, ModalComponent };
}

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

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-in;
  z-index: 999;
  width: 520px;
  height: 100vh;
`;

const ModalContent = styled.div`
  animation: ${moveTop} 0.8s ease-in-out forwards;
`;
