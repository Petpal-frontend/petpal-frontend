import React from 'react';
import { UserImg, UserInfoContainer, Username } from './UserInfoStyle';

export default function UserInfo({ img, username }) {
  return (
    <UserInfoContainer>
      <UserImg src={img} alt="사용자 프로필 이미지" />
      <Username>{username}</Username>
    </UserInfoContainer>
  );
}
