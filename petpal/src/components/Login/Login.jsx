import React from 'react';
import { LoginLogo } from './LoginStyle';
import { LoginContainer } from './LoginStyle';
import { LoginInput } from './LoginStyle';
import { LoginBtn } from './LoginStyle';

export default function Login() {
  return (
    <>
      <LoginContainer>
        <LoginLogo />
        <LoginInput
          className="inputBottom"
          type="text"
          label="이메일"
          placeholder="이메일"
        />
        <LoginInput type="password" label="비밀번호" placeholder="비밀번호" />
        <LoginBtn type="button">로그인</LoginBtn>
      </LoginContainer>
    </>
  );
}
