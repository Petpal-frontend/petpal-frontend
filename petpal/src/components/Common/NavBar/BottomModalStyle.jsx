import styled from 'styled-components';

export const ModalBackground = styled.div`
  width: clamp(320px, 100%, 520px);
  position: fixed;
  bottom: 0;
  text-align: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding-bottom: 20px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  button {
    border: none;
    background-color: transparent;
  }
  .closebtn {
    background: #c2c2c2;
    border-radius: 20px;
    margin-top: 13px;
    margin-bottom: 30px;
    cursor: pointer;
    width: 70px;
    height: 6px;
  }
`;
