import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import Input from '../Common/Input/Input';

export default function AddressSearchEdit({
  onAddressSelect,
  beforeAddress,
  className,
}) {
  const [roadAddress, setRoadAddress] = useState(beforeAddress);
  const [isOpen, setIsOpen] = useState(false);
  const completeHandler = data => {
    setRoadAddress(data.roadAddress);
    setIsOpen(false);
    onAddressSelect(data.roadAddress);
  };

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: '999',
    },
    content: {
      margin: 'auto',
      maxWidth: '520px',
      height: '444px',
      padding: '0',
      overflow: 'hidden',
      zIndex: '999',
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Input
        value={roadAddress}
        readOnly
        onClick={openModal}
        className={className}
      />
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        style={customStyles}
        //바깥 클릭하면 꺼지도록
        onRequestClose={() => setIsOpen(false)}
      >
        <DaumPostcode onComplete={completeHandler} height="100%" />
      </Modal>
      <br />
    </div>
  );
}
