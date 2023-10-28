import React from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';

export default function CareDetailPage() {
  const careDetailItem = {
    post: [
      {
        id: '0',
        content:
          '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
        image: 'images/exCatImg.png',
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
          image: 'images/exCatImg.png',
          isfollow: true,
          following: [],
          follower: ['follower1'],
          followerCount: 1,
          followingCount: 0,
        },
      },
    ],
  };

  return (
    <>
      <Header type="post" title="" />
      {/* <WalkDetailItem location={location} careDetailItem={careDetailItem} /> */}
      <WalkDetailItem walkDetailItem={careDetailItem} />
    </>
  );
}
