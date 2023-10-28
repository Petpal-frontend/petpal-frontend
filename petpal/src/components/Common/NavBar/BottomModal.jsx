import React, { useState, useRef, useEffect } from 'react';
import { ModalBackground, ModalContent } from './BottomModalStyle';
import { Link } from 'react-router-dom';
import { BottomButtonContainer } from './BottomButtonContainer';

export default function BottomModal({ onClose }) {
  const modalRef = useRef(null);

  const buttonsData = [
    { text: '쇼핑하기', path: '/productPost' },
    { text: '산책 메이트 구하기', path: '/walkPost' },
    { text: '돌보미 구하기', path: '/carePost' },
  ];

  const handleButtonClick = index => {
    // 버튼 클릭 핸들러 로직
    console.log(`Button ${index} clicked`);
  };

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

  return (
    <>
      <ModalBackground>
        <ModalContent ref={modalRef}>
          <button className="closebtn" onClick={onClose}></button>
          <BottomButtonContainer
            className="pathbtn"
            buttonsData={buttonsData}
            onButtonClick={handleButtonClick}
          />
        </ModalContent>
      </ModalBackground>
    </>
  );
}
