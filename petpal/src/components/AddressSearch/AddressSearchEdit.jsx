import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import Input from '../Common/Input/Input';

export default function AddressSearchEdit({ onAddressSelect, beforeAddress }) {
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
    },
    content: {
      left: '0',
      margin: 'auto',
      width: '500px',
      height: '600px',
      padding: '0',
      overflow: 'hidden',
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Input value={roadAddress} readOnly onClick={openModal} />
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
