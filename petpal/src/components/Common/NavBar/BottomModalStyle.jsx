import styled from 'styled-components';

export const ModalBackground = styled.div`
  width: clamp(320px, 100%, 520px);
  position: fixed;
  bottom: 0;
  // display: flex;
  //   justify-content: center;
  //   align-items: center;
  text-align: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  button {
    width: 70px;
    height: 6px;
    border-radius: 20px;
    background: #c2c2c2;
    border: none;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;
  align-items: center;
  button {
    margin-bottom: 10px;
  }
`;
