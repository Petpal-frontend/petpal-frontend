import React from 'react';
import Header from '../../components/Common/Header/Header';
import MyProfile from '../../components/Profile/MyProfile';

export default function ProfilePage() {
  const myData = {
    user: {
      _id: 'sorikikikim',
      username: '소링이',
      accountname: 'sorikikikim',
      intro: '서울',
      image: 'images/dogExImg.jpg',
      following: ['소리', 'sound', '초코'],
      follower: ['소리', 'sound', '초코'],
      followerCount: 3,
      followingCount: 3,
    },
  };

  const myPost = {
    post: [
      {
        id: '202320310313',
        content: '안녕하세요. 1 입니다.',
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
        content: '안녕하세요. 2 입니다.',
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

  const myProduct = {
    data: Number,
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
      // {
      //   id: String,
      //   itemName: '반려동물 파우치',
      //   price: 5000,
      //   link: String,
      //   itemImage: 'images/shoppingImg.png',
      //   author: {
      //     _id: '작성자 id',
      //     username: '2',
      //     accountname: '2',
      //     intro: '2',
      //     image: '2',
      //     isfollow: false,
      //     following: [],
      //     follower: ['팔로워 한 사용자의 id'],
      //     followerCount: 1,
      //     followingCount: 0,
      //   },
      // },
    ],
  };

  return (
    <>
      <Header type="post" />
      <MyProfile myData={myData} myProduct={myProduct} myPost={myPost} />
    </>
  );
}
