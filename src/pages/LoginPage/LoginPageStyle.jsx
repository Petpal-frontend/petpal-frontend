import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 920px;
  background-color: #fffad0;
  width: calc(100% + 30px);
  margin: 0 0 0 -15px;
  position: relative;
`;

export const LoginLogo = styled.img`
  position: absolute;
  top: 15%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  margin: 0 20px auto;
`;

// 로그인 폼 입력
export const LoginInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
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

export const LoginBtn = styled.button`
  cursor: pointer;
  width: 400px;
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
  color: #767676;
`;

export const SnsLoginList = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 38px;
`;

export const StyledAlert = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .alertContent {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 45%;

    p {
      margin:  15px 0;
    }
  }
`;
