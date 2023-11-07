import React, { useEffect, useState } from 'react';
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
import AddressSearchEdit from '../AddressSearch/AddressSearchEdit';
import Button from '../Common/Button/SubmitButton/Button';
import { uploadImg } from '../../api/imageApi';
import { putMyProfile } from '../../api/profile';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import CustomAlert from '../../pages/LoginPage/CustomAlert';

export default function ProfileEditForm({ beforeUserData }) {
  const [username, setUsername] = useState(beforeUserData.username);
  const [userState, setUserState] = useRecoilState(userInfoAtom);
  const [image, setImage] = useState(beforeUserData.image);
  const [selectedImage, setSelectedImage] = useState();
  const [intro, setIntro] = useState(beforeUserData.intro);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const allowedExtensions = [
        'jpg',
        'jpeg',
        'png',
        'gif',
        'bmp',
        'tif',
        'heic',
      ];

      // 파일 확장자 추출
      const extension = file.name.split('.').pop().toLowerCase();

      if (allowedExtensions.includes(extension)) {
        setImage(URL.createObjectURL(file));
        setSelectedImage(file);
      } else {
        setAlertMessage(
          '올바른 이미지 유형(.jpg, .jpeg, .png, .gif, .bmp, .tif, .heic)을 선택하세요.',
        );
        setShowAlert(true);
      }
    }
  };

  const handleAddressSelect = address => {
    setIntro(address.split(' ')[0]);
  };

  const handleProfileEdit = async e => {
    try {
      e.preventDefault();

      const imgData = new FormData();
      imgData.append('image', selectedImage);
      const imgUpload = await uploadImg(imgData);
      const imgPath = imgUpload.data.filename;
      setImage(`https://api.mandarin.weniv.co.kr/${imgPath}`);

      let userData = {};
      if (imgPath === undefined) {
        userData = {
          user: {
            username,
            intro,
            image: beforeUserData.image,
          },
        };
        setUserState({
          ...userState,
          username: username,
          intro: intro,
          image: beforeUserData.image,
        });
      } else {
        userData = {
          user: {
            username,
            intro,
            image: `https://api.mandarin.weniv.co.kr/${imgPath}`,
          },
        };
        setUserState({
          ...userState,
          username: username,
          intro: intro,
          image: `https://api.mandarin.weniv.co.kr/${imgPath}`,
        });
      }

      const response = await putMyProfile(userData);
      setAlertMessage('프로필 수정 성공');
      setShowAlert(true);

      if (response.status === 200) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    if (isSuccess) {
      navigate('/profile');
    }
  };

  return (
    <>
      <ComponentLayout>
        <FormContainer>
          <H1>프로필 설정</H1>
          <ProfileImgBox>
            <ProfileImg
              src={selectedImage ? URL.createObjectURL(selectedImage) : image}
              alt="프로필 이미지"
            />
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
              onChange={handleImageUpload}
            />
          </ProfileImgBox>
          <form onSubmit={handleProfileEdit} className="profileEditForm">
            <Input
              id="userNameSignUp"
              type="text"
              label="닉네임"
              value={username}
              placeholder="2~10자 이내여야 합니다."
              onChange={e => {
                setUsername(e.target.value);
              }}
              className="profileEditInput"
            />
            <AddressBox>
              <StyledLabel label="주소">주소</StyledLabel>
              {intro && (
                <AddressSearchEdit
                  onAddressSelect={handleAddressSelect}
                  beforeAddress={intro}
                  className="profileEditAddress"
                />
              )}
              <SearchBtn type="button">
                <Search className="a11yHidden">검색</Search>
              </SearchBtn>
            </AddressBox>
            <Button
              type="submit"
              size="lg"
              variant="primary"
              disabled={!username || !intro}
              className="profileEditBtn"
            >
              프로필 설정
            </Button>
          </form>
        </FormContainer>
        {showAlert && (
          <CustomAlert message={alertMessage} onClose={closeAlert} />
        )}
      </ComponentLayout>
    </>
  );
}
