import React from 'react';

import {
  LoginContainer,
  LoginLogo,
  LoginInput,
  LoginBtn,
  SignUpLink,
  P,
  SnsLoginList,
} from './LoginStyle';

export default function Login() {
  const imgLogo = 'images/logo.svg';
  const imgNaver = 'images/naver.svg';
  const imgGoogle = 'images/google.svg';
  const imgKakao = 'images/kakao.svg';

  return (
    <LoginContainer>
      <LoginLogo src={imgLogo} alt="펫팔 로고 이미지" />
      <form>
        <LoginInput
          label="이메일"
          type="text"
          placeholder="이메일"
          className="radiusTop"
        />
        <LoginInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          className="radiusBottom inputTop"
        />
        <LoginBtn type="submit">로그인</LoginBtn>
      </form>
      <SignUpLink to="/signup">이메일로 회원가입</SignUpLink>
      <P>SNS 계정으로 간편 로그인</P>
      <SnsLoginList>
        <a href="#">
          <img src={imgNaver} alt="네이버 계정으로 로그인" />
        </a>
        <a href="#">
          <img src={imgGoogle} alt="구글 계정으로 로그인" />
        </a>
        <a href="#">
          <img src={imgKakao} alt="카카오 계정으로 로그인" />
        </a>
      </SnsLoginList>
    </LoginContainer>
  );
}