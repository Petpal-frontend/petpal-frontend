import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressPopup = () => {
  const handleAddressSelect = data => {
    const fullAddress = data.address;
    window.opener.onAddressSelect(fullAddress);
    window.close(); // 주소를 선택한 후 창을 닫습니다.
  };

  return (
    <DaumPostcode
      onComplete={handleAddressSelect}
      autoClose // 창이 닫힌 후 자동으로 컴포넌트를 언마운트합니다.
    />
  );
};

export default AddressPopup;
