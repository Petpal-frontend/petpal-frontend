import React from 'react';
import { LoginLogo } from './LoginStyle';
import { LoginContainer } from './LoginStyle';
import { LoginInput } from './LoginStyle';

export default function Login() {
  return (
    <>
      <LoginContainer>
        <LoginLogo />
        <LoginInput className="inputBottom" type="text" placeholder="이메일" />
        <LoginInput
          className="inputTop"
          type="password"
          placeholder="비밀번호"
        />
      </LoginContainer>
    </>
  );
}
