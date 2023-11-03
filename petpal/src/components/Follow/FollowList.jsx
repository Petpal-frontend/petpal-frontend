import React from 'react';
import { FollowListContainer } from './FollowListStyle';
import FollowItem from './FollowItem';

export default function FollowerList({ follow, followPage }) {
  // console.log('follow: ', follow);

  return (
    <FollowListContainer>
      {follow.length > 0 ? (
        follow.map((item, index) => <FollowItem key={index} item={item} />)
      ) : (
        <p>
          {followPage === 'follower'
            ? '팔로워한 유저가 없습니다.'
            : '팔로잉한 유저가 없습니다.'}
        </p>
      )}
    </FollowListContainer>
  );
}
