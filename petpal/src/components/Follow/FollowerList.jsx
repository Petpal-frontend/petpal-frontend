import React from 'react';
import { FollowerListContainer } from './FollowerListStyle';
import FollowItem from './FollowItem';

export default function FollowerList({ followerList }) {
  return (
    <FollowerListContainer>
      {followerList.map((item, index) => (
        <FollowItem
          key={index}
          imgSrc={item.imgSrc}
          user={item.user}
          follow={item.follow}
        />
      ))}
    </FollowerListContainer>
  );
}
