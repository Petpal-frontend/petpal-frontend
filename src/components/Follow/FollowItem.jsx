import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FollowItemContainer,
  FollowItemImage,
  FollowItemUser,
} from './FollowItemStyle';
import FollowButton from './FollowButton';

export default function FollowItem({ item }) {
  return (
    <>
      <FollowItemContainer>
        <Link to={`/yourProfile/${item.accountname}`} className="userInfo">
          <FollowItemImage src={item.image} />
          <FollowItemUser>{item.username}</FollowItemUser>
        </Link>
        <FollowButton item={item} />
      </FollowItemContainer>
    </>
  );
}
