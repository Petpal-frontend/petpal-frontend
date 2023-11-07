import React, { useState } from 'react';
// import Login from '../../components/Login/Login';
import { postLogin } from '../../api/loginApi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { userInfoAtom } from '../../atoms/AtomUserState';
import {
  LoginContainer,
  LoginLogo,
  LoginInput,
  LoginBtn,
  SignUpLink,
  P,
  SnsLoginList,
  StyledAlert,
} from './LoginPageStyle';
import { useRecoilState } from 'recoil';
import imgLogo from '../../assets/image/logo.svg';
import imgNaver from '../../assets/image/naver.svg';
import imgGoogle from '../../assets/image/google.svg';
import imgKakao from '../../assets/image/kakao.svg';
import Button from '../../components/Common/Button/SubmitButton/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const userData = {
        user: {
          email,
          password,
        },
      };

      const response = await postLogin(userData);
      if (response.status === 200) {
        const token = response.data.user.token;
        // 로컬스토리지에 토큰 저장
        localStorage.setItem('token', token);

        const atomUserInfo = response.data.user;
        setUserInfo({
          ...userInfo,
          _id: atomUserInfo._id,
          username: atomUserInfo.username,
          email: atomUserInfo.email,
          accountname: atomUserInfo.accountname,
          intro: atomUserInfo.intro,
          image: atomUserInfo.image,
          token: atomUserInfo.token,
          refreshToken: atomUserInfo.refreshToken,
        });
        // alert('로그인 성공');
        // return navigate(`/`);

        setAlertMessage('로그인 성공');
        setShowAlert(true);
        setIsLoggedIn(true);
      }
    } catch (err) {
      console.error(err);
      // alert('회원정보가 일치하지않습니다.');
      setAlertMessage('회원정보가 일치하지 않습니다.');
      setShowAlert(true);
      setIsLoggedIn(false);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    if (isLoggedIn) {
      navigate('/');
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

      {showAlert && (
        <StyledAlert>
          <div className="alertContent">
            <p>{alertMessage}</p>
            <Button
              children="확인"
              size="xs"
              variant="primary"
              onClick={closeAlert}
            />
          </div>
        </StyledAlert>
      )}
    </LoginContainer>
  );
}
