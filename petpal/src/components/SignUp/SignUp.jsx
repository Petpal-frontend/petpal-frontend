import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignUp, checkEmailExist } from '../../api/signUpApi';

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
  SearchBtn,
  Search,
} from './SignUpStyle';
import AddressSearch from '../AddressSearch/AddressSearch';

export default function SignUpForm() {
  const imgProfileBtn = '/images/profile-btn.svg';

  const navigate = useNavigate();

  const [username, setUsername] = useState(''); // 닉네임
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');
  const [image, setImage] = useState('images/profile.svg');
  const [selectedImage, setSelectedImage] = useState(null);
  const [intro, setIntro] = useState('');
  const [validCheck, setValidCheck] = useState(false); // 이메일 유효성 체크
  const [warningMessage, setWarningMessage] = useState(''); // response의 message

  //받아온 주소값 짤라서 intro에 넣어줌
  const handleAddressSelect = address => {
    setIntro(address.split(' ')[0]);
  };

  //accountname에 petpal_ + 현재시각(절대 안겹치게 했어요) 부여해주는 로직
  useEffect(() => {
    const generateUniqueAccountname = () => {
      const currentTime = new Date();
      const timestamp = `${currentTime.getFullYear()}${(
        currentTime.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}${currentTime
        .getDate()
        .toString()
        .padStart(2, '0')}${currentTime
        .getHours()
        .toString()
        .padStart(2, '0')}${currentTime
        .getMinutes()
        .toString()
        .padStart(2, '0')}${currentTime
        .getSeconds()
        .toString()
        .padStart(2, '0')}`;
      const uniqueAccountname = `petpal_${timestamp}`;
      return uniqueAccountname;
    };

    // 회원가입 폼이 마운트될 때 자동으로 accountname 생성
    const generatedAccountname = generateUniqueAccountname();
    setAccountname(generatedAccountname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열을 전달하여 마운트될 때 한 번만 실행되도록 함

  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSignUp = async e => {
    try {
      e.preventDefault();
      const userData = {
        user: {
          username,
          email,
          password,
          accountname,
          image,
          intro,
        },
      };

      const isEmailValid = await checkEmailExist(userData);
      console.log(isEmailValid);
      console.log(isEmailValid.data.message);
      if (isEmailValid.data.message === '사용 가능한 이메일 입니다.') {
        setWarningMessage('');
        setValidCheck(!validCheck);
        // console.log(validCheck);
        const response = await postSignUp(userData);
        console.log(response);
        console.log(response.data);
        alert('회원가입성공');

        if (response.status === 200) {
          return navigate(`/login`);
        }
      } else if (
        isEmailValid.data.message === '이미 가입된 이메일 주소 입니다.'
      ) {
        setWarningMessage(isEmailValid.data.message);
        console.log(warningMessage);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SignUpContainer>
      <H1>이메일로 회원가입</H1>
      <ProfileImgBox>
        <ProfileImg
          src={selectedImage ? URL.createObjectURL(selectedImage) : image}
          alt="프로필 이미지"
        />
        <label htmlFor="profileImageUpload">
          <ProfileUpload src={imgProfileBtn} alt="사진 업로드 버튼 이미지" />
        </label>
        <input
          type="file"
          id="profileImageUpload"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </ProfileImgBox>
      <form onSubmit={handleSignUp}>
        <Input
          type="text"
          label="닉네임"
          placeholder="2~10자 이내여야 합니다."
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="text"
          label="이메일"
          placeholder="이메일을 입력해 주세요."
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        {warningMessage && (
          <div
            style={{
              color: 'red',
              fontSize: '12px',
              marginBottom: '15px',
              marginTop: '-10px',
            }}
          >
            {warningMessage}
          </div>
        )}
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <AddressBox>
          <StyledLabel label="주소">주소</StyledLabel>
          <AddressSearch onAddressSelect={handleAddressSelect} />
          <SearchBtn type="button">
            <Search className="a11yHidden">검색</Search>
          </SearchBtn>
        </AddressBox>
        <StyledButton
          type="submit"
          disabled={!username || !email || !password || !intro}
        >
          회원가입
        </StyledButton>
      </form>
    </SignUpContainer>
  );
}

// import React from 'react';
// import { Link } from 'react-router-dom';

// import { StyledLabel } from '../Common/Input/InputStyle';
// import Input from '../Common/Input/Input';
// import Button from '../Common/Button/SubmitButton/Button';

// import {
//   SignUpContainer,
//   H1,
//   ProfileImgBox,
//   ProfileImg,
//   ProfileUpload,
//   AddressBox,
//   AddressInput,
//   SearchBtn,
//   Search,
//   SignUpButtonBox,
//   LinkWrapper,
// } from './SignUpStyle';

// export default function SignUp() {
//   const imgProfile = '/images/profile.svg';
//   const imgProfileBtn = '/images/profile-btn.svg';

//   return (
//     <SignUpContainer>
//       <H1>이메일로 회원가입</H1>
//       <ProfileImgBox>
//         <ProfileImg src={imgProfile} alt="프로필 기본 이미지" />
//         <ProfileUpload src={imgProfileBtn} alt="사진 업로드 버튼 이미지" />
//       </ProfileImgBox>
//       <form>
//         <Input
//           type="text"
//           label="닉네임"
//           placeholder="2~10자 이내여야 합니다."
//         />
//         <Input
//           type="text"
//           label="이메일"
//           placeholder="이메일을 입력해 주세요."
//         />
//         <Input
//           type="password"
//           label="비밀번호"
//           placeholder="비밀번호를 입력해 주세요."
//         />
//         <AddressBox>
//           <StyledLabel label="주소">주소</StyledLabel>
//           <AddressInput
//             type="text"
//             placeholder="예) 문래동 강서타워, 테헤란로"
//           />
//           <SearchBtn type="button">
//             <Search className="a11yHidden">검색</Search>
//           </SearchBtn>
//         </AddressBox>
//         <SignUpButtonBox>
//           <Button type="submit" size="lg" variant="primary" disabled>
//             펫팔하러 GO!
//           </Button>
//         </SignUpButtonBox>
//       </form>
//       <LinkWrapper>
//         <Link to="/login">로그인</Link>
//         <Link to="/">메인으로 돌아가기</Link>
//       </LinkWrapper>
//     </SignUpContainer>
//   );
// }
