import styled from 'styled-components';

export const BottomInputContainer = styled.div`
  position: fixed;
  width: 520px;
  height: 60px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  bottom: 0;
  z-index: 10;
`;

export const BottomInputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
export const ImageBtnBox = styled.div`
  width: 36px;
  height: 36px;
`;
export const BottomInputBox = styled(BottomInputContainer)`
  position: relative;
  width: 100%;
  input {
    width: calc(100% - 36px);
    height: 38px;
    border: none;
    border-radius: 50px;
    background-color: #f2f2f2;
    text-indent: 18px;
    font-size: var(--font-size-lg);

    &:focus {
      outline: none;
    }
  }
`;
export const SubmitButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 35px;
  width: 26px;
  height: 26px;
  border: none;
  background: none;
`;
