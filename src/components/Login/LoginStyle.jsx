import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffad0;
  width: calc(100% + 30px);
  margin: 0 0 0 -15px;
`;

export const LoginLogo = styled.img`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 로그인 폼 입력
export const LoginInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  padding: 21px 0px;
  margin-top: 239px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  text-indent: 18px;
  font-size: var(--font-size-lg);
  &::placeholder {
    color: #dbdbdb;
    font-size: var(--font-size-lg);
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

export const LoginButtonBox = styled.div`
  margin-top: 38px;
`;

// 회원가입 화면으로 연결
export const SignUpLink = styled(Link)`
  margin-top: 27px;
  margin-bottom: 60px;
  text-decoration: none;
  color: var(--color-gray-med);
`;

// sns 로그인
export const P = styled.p`
  display: flex;
  color: var(--color-gray-light);
`;

export const SnsLoginList = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 38px;
`;
