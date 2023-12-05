import React, { useEffect } from 'react';
import Button from '../Button/SubmitButton/Button'; // 필요한 버튼 컴포넌트를 가져옵니다.
import { StyledAlert } from './CustomAlertStyle';

function CustomAlert({ message, onClose }) {
  useEffect(() => {
    const handleKeyDown = event => {
      // enter키
      if (event.keyCode === 13) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  return (
    <StyledAlert>
      <div className="alertContent">
        <p>{message}</p>
        <Button children="확인" size="xs" variant="primary" onClick={onClose} />
      </div>
    </StyledAlert>
  );
}

export default CustomAlert;

