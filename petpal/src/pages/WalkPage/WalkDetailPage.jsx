import React from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';

export default function WalkDetailPage({ location }) {
  const walkDetailItem = {
    // SUCCESS

    post: [
      {
        id: '0',
        content:
          '식빵이랑 친구해요 성격이 순하고 착해요. 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 강아지 친구들끼리 만나요!!!',
        image: String,
        createdAt: '20231024',
        updatedAt: '20231024',
        hearted: true,
        heartCount: 32,
        commentCount: 0,
        author: {
          _id: 'id_sorikikikim12',
          username: 'username_sorikikikim12',
          accountname: 'account_sorikikikim12',
          intro: 'intro',
          image: 'http://146.56.183.55:5050/Ellipse.png',
          isfollow: true,
          following: [],
          follower: ['follower1'],
          followerCount: 1,
          followingCount: 0,
        },
      },
    ],
  };

  // FAIL
  // 게시글이 존재하지 않을 때
  //존재하지 않는 게시글입니다.

  return (
    <>
      <Header type="walk" title="" />
      <WalkDetailItem location={location} walkDetailItem={walkDetailItem} />
    </>
  );
}
