import React from 'react';
import { FollowerListContainer } from './FollowerListStyle';
import FollowItem from './FollowItem';

import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';

export default function FollowerList({
  followerList,
  isFollow,
  setIsFollow,
  followers,
  followings,
}) {
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <FollowerListContainer>
      {/* {followerList.map((item, index) => ( */}
      {followings.map((item, index) => (
        <FollowItem
          key={index}
          imgSrc={item.imgSrc}
          user={item.user}
          isfollow={item.isfollow}
          isFollow={isFollow}
          setIsFollow={setIsFollow}
          followers={followers}
          followings={followings} //
        />
      ))}
    </FollowerListContainer>
  );
}
