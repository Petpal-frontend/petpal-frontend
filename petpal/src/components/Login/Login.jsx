// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   LoginContainer,
//   LoginLogo,
//   LoginInput,
//   LoginBtn,
//   SignUpLink,
//   P,
//   SnsLoginList,
// } from './LoginStyle';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const imgLogo = 'images/logo.svg';
//   const imgNaver = 'images/naver.svg';
//   const imgGoogle = 'images/google.svg';
//   const imgKakao = 'images/kakao.svg';

//   return (
//     <LoginContainer>
//       <LoginLogo src={imgLogo} alt="펫팔 로고 이미지" />
//       <form>
//         <LoginInput
//           label="이메일"
//           type="email"
//           placeholder="이메일"
//           className="radiusTop"
//           value={email}
//           onChange={e => {
//             setEmail(e.target.value);
//           }}
//         />
//         <LoginInput
//           label="비밀번호"
//           type="password"
//           placeholder="비밀번호"
//           className="radiusBottom inputTop"
//           value={password}
//           onChange={e => {
//             setPassword(e.target.value);
//           }}
//         />
//         <LoginBtn type="submit">로그인</LoginBtn>
//       </form>
//       <SignUpLink to="/signup">이메일로 회원가입</SignUpLink>
//       <P>SNS 계정으로 간편 로그인</P>
//       <SnsLoginList>
//         <Link href="#">
//           <img src={imgNaver} alt="네이버 계정으로 로그인" />
//         </Link>
//         <Link href="#">
//           <img src={imgGoogle} alt="구글 계정으로 로그인" />
//         </Link>
//         <Link href="#">
//           <img src={imgKakao} alt="카카오 계정으로 로그인" />
//         </Link>
//       </SnsLoginList>
//     </LoginContainer>
//   );
// }
