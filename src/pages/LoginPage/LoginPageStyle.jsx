import styled from 'styled-components';
import { Link } from 'react-router-dom';
import checkbox from '../../assets/image/icon-checkbox.svg';
import checkboxfill from '../../assets/image/icon-checkbox-fill.svg';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // height: 100vh;
  background-color: #fffad0;
  // width: calc(100% + 30px);
  // margin: 0 0 0 -15px;
  padding: 0 60px;
  min-height: 100vh;

  form {
    width: 100%;
  }
  //  min-height: 920px;
  //  width: 520px;
  //   background-color: #fffad0;
  //   width: 520px;
  //   position: relative;
`;

export const LoginLogo = styled.img`
  position: absolute;
  top: 12%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  margin: 0 20px auto;
`;

// 로그인 폼 입력
export const LoginInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // width: 400px;
  width: 100%;
  padding: 23px 0px;
  margin-top: 239px;
  border: 1px solid #dbdbdb;
  text-indent: 16px;
  box-sizing: border-box;
  &::placeholder {
    color: #dbdbdb;
    font-size: var(--font-size-l);
    text-indent: 18px;
  }
  &.inputTop {
    margin-top: -1px;
  }
  &.radiusTop {
    border-radius: 10px 10px 0 0;
  }
  &.radiusBottom {
    border-radius: 0 0 10px 10px;
  }
`;

export const TestCheckBox = styled.div`
  margin-top: 12px;
  position: relative;

  input {
    display: none;
  }

  label {
    padding-left: 24px;
    font-size: 14px;
    cursor: pointer;
  }

  label::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url(${checkbox});
    background-size: 100% 100%;
    position: absolute;
    left: 0;
  }

  label.checked::before {
    background-image: url(${checkboxfill});
  }
`;

export const LoginBtn = styled.button`
  cursor: pointer;
  // width: 400px;
  width: 100%;
  height: 60px;
  margin-top: 38px;
  background-color: #27489d;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

// 회원가입 화면으로 연결
export const SignUpLink = styled(Link)`
  margin-top: 27px;
  margin-bottom: 75px;
  text-decoration: none;
  color: #4b4b4b;
`;

// sns 로그인
export const P = styled.p`
  display: flex;
  color: #6d6d6d;
`;

export const SnsLoginList = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 38px;
`;
