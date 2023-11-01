import React, { useState } from 'react';
import {
  ComponentLayout,
  FormContainer,
  H1,
} from '../Common/Layout/LayoutStyle';
import {
  AddressBox,
  ProfileImg,
  ProfileImgBox,
  ProfileUpload,
  SearchBtn,
  Search,
} from '../SignUp/SignUpStyle';
import imgProfileBtn from '../../assets/image/profile-btn.svg';
import Input from '../Common/Input/Input';
import { StyledLabel } from '../Common/Input/InputStyle';
import AddressSearch from '../AddressSearch/AddressSearch';

export default function ProfileEditForm() {
  const img = 'images/exDogImg.jpg';
  const [username, setUsername] = useState('default username');
  return (
    <>
      <ComponentLayout>
        <FormContainer>
          <H1>프로필 설정</H1>
          <ProfileImgBox>
            <ProfileImg src={img} alt="프로필 이미지" />
            <label htmlFor="profileImageUpload">
              <ProfileUpload
                src={imgProfileBtn}
                alt="사진 업로드 버튼 이미지"
              />
            </label>
            <input
              type="file"
              id="profileImageUpload"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={() => {}}
            />
          </ProfileImgBox>
          <form onSubmit={() => {}}>
            <Input
              id="userNameSignUp"
              type="text"
              label="닉네임"
              placeholder="2~10자 이내여야 합니다."
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
            <AddressBox>
              <StyledLabel label="주소">주소</StyledLabel>
              <AddressSearch onAddressSelect={() => {}} />
              <SearchBtn type="button">
                <Search className="a11yHidden">검색</Search>
              </SearchBtn>
            </AddressBox>
          </form>
        </FormContainer>
      </ComponentLayout>
    </>
  );
}
