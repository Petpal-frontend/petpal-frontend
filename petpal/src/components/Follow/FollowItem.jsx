import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FollowItemContainer,
  FollowItemImage,
  FollowItemUser,
  FollowItemButton,
} from './FollowItemStyle';
import { deleteFollow, postFollow } from '../../api/follow';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';

export default function FollowItem({
  imgSrc,
  user,
  isFollow,
  setIsFollow,
  followers,
  followings,
}) {
  console.log(followings);
  console.log(
    followings[0].username,
    followings[0].image,
    followings[0].isfollow,
  );

  // useEffect(() => {
  //   const fetchPostFollowData = async () => {
  //     const data = await postFollow('ts10');
  //     console.log(data);
  //   };

  //   fetchPostFollowData();
  // }, []);

  // useEffect(() => {
  //   const fetchDeleteFollowData = async () => {
  //     const data = await deleteFollow('ts10');
  //     console.log(data);
  //   };

  //   fetchDeleteFollowData();
  // }, []);

  // // const userInfo = useRecoilValue(userInfoAtom);
  // const [isFollow, setIsFollow] = useState(false);

  /* 팔로우 */
  const fetchPostFollowData = async () => {
    const data = await postFollow('ts10'); //(버튼 클릭한) 상대방의 accountname
    // setIsFollow(true);
    console.log(data);
    console.log(data.profile.isfollow);
  };

  // fetchPostFollowData();

  /* 언팔로우 */
  const fetchDeleteFollowData = async () => {
    const data = await deleteFollow('ts10'); //(버튼 클릭한) 상대방의 accountname
    // setIsFollow(false);
    console.log(data);
    console.log(data.profile.isfollow);
  };

  // fetchDeleteFollowData();

  return (
    <>
      {followings.map((el, i) => {
        return (
          <FollowItemContainer>
            {/* 해당 사용자 프로필로 넘어가게 해야 함 */}
            <Link to={`/profile`} className="userInfo">
              <FollowItemImage src={followings[i].image} />
              <FollowItemUser>{followings[i].username}</FollowItemUser>
              {/* <FollowItemImage src={imgSrc} />
        <FollowItemUser>{user}</FollowItemUser> */}
            </Link>
            <FollowItemButton
              onClick={fetchPostFollowData}
              // onClick={isFollow ? fetchDeleteFollowData : fetchPostFollowData}
              // onClick={e => e.target.classList.toggle('follow')} // setIsFollow(!isFollow)
              // onClick={} // setIsFollow(!isFollow)
              className={followings[i].isfollow ? 'follow' : null}
              // className={followings[0].isfollow ? 'follow' : null}
            >
              {followings[i].isfollow ? '취소' : '팔로우'}
              {/* {followings[0].isfollow ? '취소' : '팔로우'} */}
            </FollowItemButton>
          </FollowItemContainer>
        );
      })}
    </>
  );
}
