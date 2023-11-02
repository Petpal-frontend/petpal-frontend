import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FollowItemContainer,
  FollowItemImage,
  FollowItemUser,
  FollowItemButton,
} from './FollowItemStyle';
import { deleteFollow, postFollow } from '../../api/follow';

export default function FollowItem({ item }) {
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
    <>
      <FollowItemContainer>
        <Link to={`/profile/${item.accountname}`} className="userInfo">
          <FollowItemImage src={item.image} />
          <FollowItemUser>{item.username}</FollowItemUser>
        </Link>
        <FollowItemButton
          onClick={isFollow ? fetchDeleteFollowData : fetchPostFollowData}
          className={isFollow ? 'follow' : ''}
        >
          {isFollow ? '취소' : '팔로우'}
        </FollowItemButton>
      </FollowItemContainer>
    </>
  );
}
