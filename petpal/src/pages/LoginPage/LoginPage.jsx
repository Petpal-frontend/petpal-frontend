import React, { useState } from 'react';
import Login from '../../components/Login/Login';
import { postLogin } from '../../api/loginApi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  LoginContainer,
  LoginLogo,
  LoginInput,
  LoginBtn,
  SignUpLink,
  P,
  SnsLoginList,
} from './LoginPageStyle';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const imgLogo = 'images/logo.svg';
  const imgNaver = 'images/naver.svg';
  const imgGoogle = 'images/google.svg';
  const imgKakao = 'images/kakao.svg';

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const userData = {
        user: {
          email,
          password,
        },
      };
      console.log(userData);

      const response = await postLogin(userData);
      console.log('res' + response);
      console.log('resdata' + response.data);

      if (response.status === 200) {
        const token = response.user.token;
        console.log('tototoot' + token);
        // 로컬스토리지에 토큰 저장하기.
        localStorage.setItem('token', token);
        alert('로그인 성공');
        // return navigate(`/`);
      }
    } catch (err) {
      console.log(err);
      alert('로그인 실패');
    }
  };

  return (
    <LoginContainer>
      <LoginLogo src={imgLogo} alt="펫팔 로고 이미지" />
      <form>
        <LoginInput
          label="이메일"
          type="email"
          placeholder="이메일"
          className="radiusTop"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <LoginInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          className="radiusBottom inputTop"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <LoginBtn type="submit" onClick={handleLogin}>
          로그인
        </LoginBtn>
      </form>
      <SignUpLink to="/signup">이메일로 회원가입</SignUpLink>
      <P>SNS 계정으로 간편 로그인</P>
      <SnsLoginList>
        <Link href="#">
          <img src={imgNaver} alt="네이버 계정으로 로그인" />
        </Link>
        <Link href="#">
          <img src={imgGoogle} alt="구글 계정으로 로그인" />
        </Link>
        <Link href="#">
          <img src={imgKakao} alt="카카오 계정으로 로그인" />
        </Link>
      </SnsLoginList>
    </LoginContainer>
  );
}
