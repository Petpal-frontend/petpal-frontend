import React from 'react';
import { UserImg, UserInfoContainer, Username } from './UserInfoStyle';

export default function UserInfo({ img, username }) {
  return (
    <UserInfoContainer>
      <UserImg src={img} alt="User profile" />
      <Username>{username}</Username>
    </UserInfoContainer>
  );
}
