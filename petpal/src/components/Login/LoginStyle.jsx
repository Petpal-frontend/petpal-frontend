import styled from 'styled-components';

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffad0;
  width: 520px;
  height: 100vh;
`;

export const LoginLogo = styled.div`
  width: 190px;
  height: 172px;
  margin-bottom: 41px;
  background-image: url('images/logo.svg');
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const LoginLabel = styled.label`
  &.a11yHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;

export const LoginInput = styled.input`
  width: 300px;
  padding: 17px 0px;
  border: 1px solid #dbdbdb;
  text-indent: 16px;
  &.inputBottom {
    border-bottom: none;
  }
`;

export const LoginBtn = styled.button`
  cursor: pointer;
  width: 300px;
  height: 60px;
  margin-top: 38px;
  background-color: #27489d;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;
