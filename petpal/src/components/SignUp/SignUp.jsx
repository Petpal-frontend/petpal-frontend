import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignUp, checkEmailExist } from '../../api/signUpApi';
import { uploadImg } from '../../api/imageApi';
import AddressSearch from '../AddressSearch/AddressSearch';


// const SignUpForm = () => {
//   const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');
  const [image, setImage] = useState(
    'https://api.mandarin.weniv.co.kr/Ellipse.png',
  );
  const [previewImage, setPreviewImage] = useState(null);

  const [intro, setIntro] = useState('');
  const [latestValue, setLatestValue] = useState(1);

//   //받아온 주소값 짤라서 intro에 넣어줌
//   const handleAddressSelect = address => {
//     setIntro(address.split(' ')[0]);
//   };

//   //accountname에 petpal_ + 현재시각(절대 안겹치게 했어요) 부여해주는 로직
//   useEffect(() => {
//     const generateUniqueAccountname = () => {
//       const currentTime = new Date();
//       const timestamp = `${currentTime.getFullYear()}${(
//         currentTime.getMonth() + 1
//       )
//         .toString()
//         .padStart(2, '0')}${currentTime
//         .getDate()
//         .toString()
//         .padStart(2, '0')}${currentTime
//         .getHours()
//         .toString()
//         .padStart(2, '0')}${currentTime
//         .getMinutes()
//         .toString()
//         .padStart(2, '0')}${currentTime
//         .getSeconds()
//         .toString()
//         .padStart(2, '0')}`;
//       const uniqueAccountname = `petpal_${timestamp}`;
//       return uniqueAccountname;
//     };

//     // 회원가입 폼이 마운트될 때 자동으로 accountname 생성
//     const generatedAccountname = generateUniqueAccountname();
//     setAccountname(generatedAccountname);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // 빈 배열을 전달하여 마운트될 때 한 번만 실행되도록 함

//   const Signup = async () => {
//     try {
//       const userData = {
//         user: {
//           username,
//           email,
//           password,
//           accountname,
//           image,
//           intro,
//         },
//       };

//       const isEmailValid = await checkEmailExist(userData);
//       console.log(isEmailValid);

//       const response = await postSignUp(userData);

//       console.log(response.data);
//       alert('회원가입성공');

//       if (response.status === 200) {
//         return navigate(`/login`);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

import { StyledLabel } from '../Common/Input/InputStyle';
import { StyledButton } from '../Common/Button/FormButton/FormButtonStyle';
import Input from '../Common/Input/Input';

import {
  SignUpContainer,
  H1,
  ProfileImgBox,
  ProfileImg,
  ProfileUpload,
  AddressBox,
  AddressInput,
  SearchBtn,
  Search,
} from './SignUpStyle';

export default function SignUp() {
  const imgProfile = '/images/profile.svg';
  const imgProfileBtn = '/images/profile-btn.svg';


  return (
    <div className="signup">
      <div className="signup_input">
        <label>name</label>
        <br />
        <input
          type="text"
          placeholder="username"
          onChange={e => {
            setUsername(e.target.value);
          }}
          label="닉네임"
          placeholder="2~10자 이내여야 합니다."
        />
      </div>
      <div className="signup_input">
        <label>Email</label>
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="signup_input">
        <label>password</label>
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
// <<<<<<< imageApi
//       </div>
//       <AddressSearch onAddressSelect={handleAddressSelect} />
//       <button onClick={Signup}>signup</button>
//     </div>
// =======
        <AddressBox>
          <StyledLabel label="주소">주소</StyledLabel>
          <AddressInput
            type="text"
            placeholder="예) 문래동 강서타워, 테헤란로"
          />
          <SearchBtn type="button">
            <Search className="a11yHidden">검색</Search>
          </SearchBtn>
        </AddressBox>

        <StyledButton />
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
