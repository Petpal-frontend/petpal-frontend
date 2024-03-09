import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Common/Header/Header';
import FollowList from '../../components/Follow/FollowList';
import NavBar from '../../components/Common/NavBar/NavBar';
import { getFollowers, getFollowings } from '../../api/follow';
import { Helmet } from 'react-helmet-async';

export default function FollowerPage() {
  const userAccountName = useParams().accountname;
  const followPage = useParams().follow;
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);

  /* 팔로워 리스트 (나를 팔로우한 사용자 목록) */
  useEffect(() => {
    const fetchFollowersData = async () => {
      const followerData = await getFollowers(userAccountName); // 유저 accountname
      setFollowers(followerData);
    };

    fetchFollowersData();
  }, []);

  /* 팔로잉 리스트 (내가 팔로우한 사용자 목록) */
  useEffect(() => {
    const fetchFollowingsData = async () => {
      const followingData = await getFollowings(userAccountName); // 유저 accountname
      setFollowings(followingData);
    };

    fetchFollowingsData();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {followPage === 'follower'
            ? '팔로워 목록 | Petpal'
            : '팔로잉 목록 | Petpal'}{' '}
        </title>
        {followPage === 'follower' ? (
          <meta name="description" content="펫팔의 팔로워 목록 페이지" />
        ) : (
          <meta name="description" content="펫팔의 팔로잉 목록 페이지" />
        )}
      </Helmet>
      <Header
        type="follow"
        title={followPage === 'follower' ? 'Followers' : 'Followings'}
      />
      <FollowList
        follow={followPage === 'follower' ? followers : followings}
        followPage={followPage}
      />
      <NavBar />
    </>
  );
}
