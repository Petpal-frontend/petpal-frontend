import React from 'react';
import Header from '../../components/Common/Header/Header';
import YourProfile from '../../components/Profile/YourProfile';

export default function YourProfilePage() {
  // GET /profile/:accountname
  const yourData = {
    profile: {
      _id: 'walking12',
      username: '산책시키는사람',
      accountname: 'walking12',
      intro: '서울',
      image: 'images/catExImg.png',
      isfollow: true,
      following: [],
      follower: [],
      followerCount: 61,
      followingCount: 12,
    },
  };

  const yourPost = {
    post: [
      {
        id: '202320310313',
        content: '안녕하세요. 1 입니다.',
        image: 'images/exDogImg.jpg',
        createdAt: String,
        updatedAt: String,
        hearted: false,
        heartCount: 0,
        commentCount: 0,
        author: {
          _id: 'sorikikikim',
          username: '소링이',
          accountname: 'sorikikikim',
          intro: '',
          image: 'images/exDogImg.jpg',
          isfollow: false,
          following: [],
          follower: ['follower id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
      {
        id: '202320310313',
        content: '안녕하세요. 2 입니다.',
        image: 'images/exDogImg.jpg',
        createdAt: String,
        updatedAt: String,
        hearted: false,
        heartCount: 0,
        commentCount: 0,
        author: {
          _id: 'sorikikikim',
          username: '소링이',
          accountname: 'sorikikikim',
          intro: '',
          image: 'images/exDogImg.jpg',
          isfollow: false,
          following: [],
          follower: ['follower id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
      {
        id: '202320310313',
        content: '안녕하세요. 3 입니다.',
        image: 'images/exDogImg.jpg',
        createdAt: String,
        updatedAt: String,
        hearted: false,
        heartCount: 0,
        commentCount: 0,
        author: {
          _id: 'sorikikikim',
          username: '소링이',
          accountname: 'sorikikikim',
          intro: '',
          image: 'images/exDogImg.jpg',
          isfollow: false,
          following: [],
          follower: ['follower id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
      {
        id: '202320310313',
        content: '안녕하세요. 3 입니다.',
        image: 'images/exCatImg.png',
        createdAt: String,
        updatedAt: String,
        hearted: false,
        heartCount: 0,
        commentCount: 0,
        author: {
          _id: 'sorikikikim',
          username: '소링이',
          accountname: 'sorikikikim',
          intro: '',
          image: 'images/exDogImg.jpg',
          isfollow: false,
          following: [],
          follower: ['follower id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
      {
        id: '202320310313',
        content: '안녕하세요. 3 입니다.',
        image: 'images/exCatImg.png',
        createdAt: String,
        updatedAt: String,
        hearted: false,
        heartCount: 0,
        commentCount: 0,
        author: {
          _id: 'sorikikikim',
          username: '소링이',
          accountname: 'sorikikikim',
          intro: '',
          image: 'images/exDogImg.jpg',
          isfollow: false,
          following: [],
          follower: ['follower id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
      {
        id: '202320310313',
        content: '안녕하세요. 3 입니다.',
        image: 'images/exCatImg.png',
        createdAt: String,
        updatedAt: String,
        hearted: false,
        heartCount: 0,
        commentCount: 0,
        author: {
          _id: 'sorikikikim',
          username: '소링이',
          accountname: 'sorikikikim',
          intro: '',
          image: 'images/exDogImg.jpg',
          isfollow: false,
          following: [],
          follower: ['follower id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
    ],
  };

  const yourProduct = {
    data: 3,
    product: [
      {
        id: String,
        itemName: '반려동물 파우치',
        price: 5000,
        link: String,
        itemImage: 'images/shoppingImg.png',
        author: {
          _id: '작성자 id',
          username: '2',
          accountname: '2',
          intro: '2',
          image: '2',
          isfollow: false,
          following: [],
          follower: ['팔로워 한 사용자의 id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
      {
        id: String,
        itemName: '반려동물 파우치',
        price: 5000,
        link: String,
        itemImage: 'images/shoppingImg.png',
        author: {
          _id: '작성자 id',
          username: '2',
          accountname: '2',
          intro: '2',
          image: '2',
          isfollow: false,
          following: [],
          follower: ['팔로워 한 사용자의 id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
      {
        id: String,
        itemName: '반려동물 파우치',
        price: 5000,
        link: String,
        itemImage: 'images/shoppingImg.png',
        author: {
          _id: '작성자 id',
          username: '2',
          accountname: '2',
          intro: '2',
          image: '2',
          isfollow: false,
          following: [],
          follower: ['팔로워 한 사용자의 id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
    ],
  };

  return (
    <>
      <Header type="post" />
      <YourProfile
        yourData={yourData}
        yourProduct={yourProduct}
        yourPost={yourPost}
      />
    </>
  );
}
