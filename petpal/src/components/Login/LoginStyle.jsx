import styled from 'styled-components';
// import logo from 'images/logo.svg';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fffad0;
  width: 520px;
  height: 100vh;
`;

export const LoginLogo = styled.div`
  /* margin-top: 157px; */
  width: 190px;
  height: 172px;
  background-image: url('images/logo.svg');
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const LoginInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #dbdbdb;
  text-indent: 16px;
  &.inputBottom {
    border-bottom: none;
  }
`;
