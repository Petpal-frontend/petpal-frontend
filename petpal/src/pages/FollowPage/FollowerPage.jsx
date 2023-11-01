import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import Header from '../../components/Common/Header/Header';
import FollowerList from '../../components/Follow/FollowerList';
import NavBar from '../../components/Common/NavBar/NavBar';
import {
  getFollowers,
  getFollowings,
  postFollow,
  deleteFollow,
} from '../../api/follow';

const followerList = [
  {
    imgSrc: 'images/exDogImg.jpg',
    user: '식빵맘',
    isfollow: false,
  },
  {
    imgSrc: 'images/exDogImg.jpg',
    user: '식빵맘2',
    isfollow: false,
  },
  {
    imgSrc: 'images/exDogImg.jpg',
    user: '식빵맘3',
    isfollow: true,
  },
  {
    imgSrc: 'images/exDogImg.jpg',
    user: '식빵맘4',
    isfollow: false,
  },
];

export default function FollowerPage() {
  // const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  // const [isFollow, setIsFollow] = useState(false);

  const userInfo = useRecoilValue(userInfoAtom);
  console.log('내정보userInfo:::', userInfo); //내 정보 (리코일)
  // console.log('내정보userInfo.accountname:::', userInfo.accountname);

  /* 팔로워 리스트 (나를 팔로우한 사용자 목록) */
  // useEffect(() => {
  //   const fetchFollowersData = async () => {
  //     const data = await getFollowers(userInfo.accountname); // 내 accountname
  //     console.log('getFollowers data: ', data);
  //     console.log('follower: ', data.length > 0 ? data[0].following : '없음');
  //     // setFollowers(data.length > 0 ? data[0].following : '없음');
  //   };

  //   fetchFollowersData();
  // }, []);

  /* 팔로잉 리스트 (내가 팔로우한 사용자 목록) */
  useEffect(() => {
    const fetchFollowingsData = async () => {
      const followingData = await getFollowings(userInfo.accountname); // 내 accountname
      console.log('getFollowings data: ', followingData); // 내가 팔로잉한 사람들 한명씩 객체에 담겨서 뜸
      console.log(
        'following: ',
        followingData[0].username,
        followingData[0].image,
      );

      setFollowings(followingData);

      // return data;
    };

    fetchFollowingsData();
  }, []);
  console.log(followings);
  /////////////////////////////////////////////////////////////////////////

  // const [followerList, setFollowerList] = useState([]);
  // const token = localStorage.getItem('token');

  // const accountname = useParams().accountname;
  // console.log('dsdsd####' + localStorage.getItem(accountname));
  // console.log('accountname####' + accountname);
  // useEffect(() => {
  //   const followList = async () => {
  //     const response = await getFollowingList(accountname);
  //     console.log('response= ' + JSON.stringify(response));
  //     // console.log('response= ' + JSON.stringify(response.username));
  //     setFollowerList(response);
  //   };
  //   followList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const handleButtonClick = index => {
  //   const updatedFollowerList = [...followerList];
  //   updatedFollowerList[index].follow =
  //     updatedFollowerList[index].follow === 'images/homeLogo.svg'
  //       ? 'images/follow.png'
  //       : 'images/homeLogo.svg';
  //   setFollowerList(updatedFollowerList);
  // };

  return (
    <>
      <Header type="list" title="Followers" />
      <FollowerList
        followerList={followerList}
        // onButtonClick={handleButtonClick}
        // isFollow={isFollow}
        // setIsFollow={setIsFollow}
        // followers={followers}
        followings={followings}
      />
      <NavBar />
    </>
  );
}
