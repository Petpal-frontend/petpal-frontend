import React from 'react';

import Input from '../Common/Input/Input';

import {
  SignUpContainer,
  H1,
  ProfileImgBox,
  ProfileImg,
  ProfileUpload,
  SearchImg,
} from './SignUpStyle';

export default function SignUp() {
  const imgProfile = '/images/profile.svg';
  const imgProfileBtn = '/images/profile-btn.svg';
  const imgSearch = '/images/icon-search.svg';

  return (
    <SignUpContainer>
      <H1>이메일로 회원가입</H1>
      <ProfileImgBox>
        <ProfileImg src={imgProfile} alt="프로필 기본 이미지" />
        <ProfileUpload src={imgProfileBtn} alt="사진 업로드 버튼 이미지" />
      </ProfileImgBox>
      <form>
        <Input
          type="text"
          label="닉네임"
          placeholder="닉네임을 입력해 주세요."
        />
        <Input
          type="text"
          label="이메일"
          placeholder="이메일을 입력해 주세요."
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
        />
        <Input
          type="text"
          label="주소"
          placeholder="예) 문래동 강서타워, 테헤란로"
        />
        <SearchImg src={imgSearch} alt="검색 돋보기 아이콘" />
      </form>
    </SignUpContainer>
  );
}
