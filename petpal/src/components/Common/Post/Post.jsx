import React from 'react';
import Header from '../Header/Header';
import { UserImg } from '../../Common/Userinfo/UserInfoStyle';

import {
  PostContainer,
  PostContent,
  ImgUploadButton,
  ButtonImg,
} from './PostStyle';

export default function Post({
  title,
  id,
  type,
  label,
  value,
  placeholder,
  onSubmit,
  onClick,
}) {
  const myProfile = 'images/profile-img4.svg';
  const imgUploadBtn = 'images/chat-upload-btn.svg';

  return (
    <>
      <Header type="posting" title={title} />;
      <PostContainer>
        <UserImg
          src={myProfile}
          alt="프로필 이미지"
          style={{ width: '60px', height: '60px' }}
        />
        <form onSubmit={onSubmit}>
          <label htmlFor={id} label={label} className="a11yHidden">
            {label}
          </label>
          <PostContent
            id={id}
            value={value}
            placeholder={placeholder}
            onClick={onClick}
          />
        </form>
        <ImgUploadButton type="submit" />
      </PostContainer>
    </>
  );
}
