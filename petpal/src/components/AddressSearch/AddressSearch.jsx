import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';

function AddressSearch({ onAddressSelect }) {
  const [roadAddress, setRoadAddress] = useState('');
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
      <br />
      <input
        value={roadAddress}
        readOnly
        placeholder="주소"
        onClick={openModal}
      />
      <br />
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

export default AddressSearch;
