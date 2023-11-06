import React, { useState } from 'react';
import { FollowItemButton } from './FollowButtonStyle';
import { deleteFollow, postFollow } from '../../api/follow';

export default function FollowButton({ item }) {
  const [isFollow, setIsFollow] = useState(item.isfollow);
  console.log('isFollow', isFollow);

  /* 팔로우 */
  const fetchPostFollowData = async () => {
    const data = await postFollow(item.accountname); // 해당 유저의 accountname
    setIsFollow(!isFollow);
  };

  /* 언팔로우 */
  const fetchDeleteFollowData = async () => {
    const data = await deleteFollow(item.accountname); // 해당 유저의 accountname
    setIsFollow(!isFollow);
  };

  return (
    <FollowItemButton
      onClick={isFollow ? fetchDeleteFollowData : fetchPostFollowData}
      className={isFollow ? 'follow' : ''}
    >
      {isFollow ? '팔로잉' : '팔로우'}
    </FollowItemButton>
  );
}
