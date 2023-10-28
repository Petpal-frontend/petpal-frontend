import React from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';

// export default function WalkDetailPage({ location }) {
export default function WalkDetailPage() {
  const walkDetailItem = {
    post: [ 

      {
        id: '0',
        content:
          '식빵이랑 친구해요 성격이 순하고 착해요. 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 강아지 친구들끼리 만나요!!!',
        image: 'images/exDogImg.jpg',
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
          image: 'images/exDogImg.jpg',
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
      {/* <WalkDetailItem location={location} walkDetailItem={walkDetailItem} /> */}
      <WalkDetailItem walkDetailItem={walkDetailItem} />
      <BottomInput id="comment" placeholder="댓글을 남겨보세요" />
    </>
  );
}
