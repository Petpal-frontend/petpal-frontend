import React, { useState, useRef, useEffect } from 'react';
import {
  ModalBackground,
  ModalContent,
  ButtonContainer,
} from './BottomModalStyle';

export default function BottomModal({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);
  const handleButtonClick = buttonIndex => {
    // 버튼 클릭 이벤트 처리 로직을 여기에 추가할 수 있습니다.
    // 예를 들어 버튼에 따른 특정 동작을 수행할 수 있습니다.
    console.log(`Button ${buttonIndex} clicked`);
    onClose(); // 버튼 클릭 후 모달 닫기
  };
  return (
    <>
      <ModalBackground>
        <ModalContent ref={modalRef}>
          <ButtonContainer>
            <button onClick={onClose}></button>
            <button onClick={() => handleButtonClick(1)}>버튼 1</button>
            <button onClick={() => handleButtonClick(2)}>버튼 2</button>
            <button onClick={() => handleButtonClick(3)}>버튼 3</button>
          </ButtonContainer>
        </ModalContent>
      </ModalBackground>
    </>
  );
}
