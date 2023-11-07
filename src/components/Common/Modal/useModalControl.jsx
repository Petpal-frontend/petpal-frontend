import { useState } from 'react';
import { ModalContainer, ModalContent } from './useModalControlStyle';

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
