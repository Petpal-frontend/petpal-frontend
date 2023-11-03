import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FollowItemContainer,
  FollowItemImage,
  FollowItemUser,
} from './FollowItemStyle';
import FollowButton from './FollowButton';
import { postFollow, deleteFollow } from '../../api/follow';
export default function FollowItem({ item }) {
  const [isFollow, setIsFollow] = useState(item.isfollow);
  console.log('isFollow', isFollow);

  /* 팔로우 */
  const fetchPostFollowData = async () => {
    await postFollow(item.accountname); // 해당 유저의 accountname
    setIsFollow(!isFollow);
  };

  /* 언팔로우 */
  const fetchDeleteFollowData = async () => {
    await deleteFollow(item.accountname); // 해당 유저의 accountname
    setIsFollow(!isFollow);
  };

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
