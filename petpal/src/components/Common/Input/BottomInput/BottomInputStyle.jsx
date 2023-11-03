import styled from 'styled-components';

export const BottomInputContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 520px;
  height: 60px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  bottom: 0;
  z-index: 2;
`;

export const ImageBtnBox = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border: none;
  background: none;
`;

export const BottomInputBox = styled.form``;

export const StyledInput = styled.input`
  position: relative;
  width: 503px;
  height: 42px;
  padding: 0 16px;
  border: none;
  border-radius: 50px;
  background-color: #f2f2f2;
  font-size: var(--font-size-md);
  ${props =>
    props.isChat &&
    `
width: 448px;
padding: 0 16px;
height: 42px;
    border: none;
    border-radius: 20px;
    background-color: #f2f2f2;
    font-size: var(--font-size-md);
`}

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #acacac;
    font-size: var(--font-size-md);
    font-weight: 500;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 30px;
  width: 26px;
  height: 26px;
  border: none;
  background: none;
`;
