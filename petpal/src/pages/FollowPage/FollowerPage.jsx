import React from 'react';
import Header from '../../components/Common/Header/Header';
import FollowerList from '../../components/Follow/FollowerList';

const followerList = [
  {
    imgSrc: 'images/exDogImg.jpg',
    user: '식빵맘',
    follow: '',
  },
  {
    imgSrc: 'images/exDogImg.jpg',
    user: '식빵맘',
    follow: '',
  },
  {
    imgSrc: 'images/exDogImg.jpg',
    user: '식빵맘',
    follow: '',
  },
  {
    imgSrc: 'images/exDogImg.jpg',
    user: '식빵맘',
    follow: '',
  },
];
export default function FollowerPage() {
  return (
    <>
      <Header type="walk" title="Followers" />
      <FollowerList followerList={followerList} />
    </>
  );
}
