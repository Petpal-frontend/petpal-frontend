import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import MyProfile from '../../components/Profile/MyProfile';
import { userInfoAtom } from '../../atoms/AtomUserState';
import { useRecoilValue } from 'recoil';
import { getMyProfile } from '../../api/profile';
import { getMyProduct } from '../../api/product';
import { getMyPost } from '../../api/post';
export default function ProfilePage() {
  const userState = useRecoilValue(userInfoAtom);
  const [userData, setUserData] = useState(null);
  const [userProductData, setUserProductData] = useState(null);
  const [userPostData, setUserPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await getMyProfile(userState.token);
        const productResponse = await getMyProduct(userState.accountname);
        const postResponse = await getMyPost(userState.accountname);
        // console.log('어카운트네임!==' + userState.accountname);
        // console.log('데이터확인!==' + postResponse.data.post[0].content);
        setUserData(profileResponse.data);
        setUserProductData(productResponse.data);
        setUserPostData(postResponse.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [userState.token, userState.accountname]);

  // const token = useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await getMyProfile(userState.token);
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error('프로필 데이터를 불러오는 중 오류 발생:', error);
  //     }
  //   };
  //   fetchProfileData();
  // }, [userState.token]);

  // useEffect(() => {
  //   const fetchProductData = async () => {
  //     try {
  //       const response = await getMyProduct(userState.accountname);
  //       setUserProductData(response.data);
  //     } catch (error) {
  //       console.error('상품 데이터를 불러오는 중 오류 발생:', error);
  //     }
  //   };
  //   fetchProductData();
  // }, [userState.accountname]);

  // useEffect(() => {
  //   const fetchPostData = async () => {
  //     try {
  //       const response = await getMyPost(userState.accountname);
  //       // console.log('어카운트네임!==' + userState.accountname);
  //       // console.log('데이터확인!==' + response.data.post[0].content);
  //       setUserPostData(response.data);
  //     } catch (error) {
  //       console.error('게시물 데이터를 불러오는 중 오류 발생:', error);
  //     }
  //   };
  //   fetchPostData();
  // }, [userState.accountname]);

  // const myData = {
  //   user: {
  //     _id: 'sorikikikim',
  //     username: '소링이',
  //     accountname: 'sorikikikim',
  //     image: 'images/dogExImg.jpg',
  //     isfollow: false,
  //     following: [],
  //     follower: [],
  //     followerCount: 121391,
  //     followingCount: 3234,
  //   },
  // };
  // const myPost = {
  //   post: [
  //     {
  //       id: '202320310313',
  //       content: '안녕하세요. 1 입니다.',
  //       image: 'images/exCatImg.png',
  //       createdAt: String,
  //       updatedAt: String,
  //       hearted: false,
  //       heartCount: 0,
  //       commentCount: 0,
  //       author: {
  //         _id: 'sorikikikim',
  //         username: '소링이',
  //         accountname: 'sorikikikim',
  //         intro: '',
  //         image: 'images/exDogImg.jpg',
  //         isfollow: false,
  //         following: [],
  //         follower: ['follower id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //     {
  //       id: '202320310313',
  //       content: '안녕하세요. 2 입니다.',
  //       image: 'images/exCatImg.png',
  //       createdAt: String,
  //       updatedAt: String,
  //       hearted: false,
  //       heartCount: 0,
  //       commentCount: 0,
  //       author: {
  //         _id: 'sorikikikim',
  //         username: '소링이',
  //         accountname: 'sorikikikim',
  //         intro: '',
  //         image: 'images/exDogImg.jpg',
  //         isfollow: false,
  //         following: [],
  //         follower: ['follower id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //     {
  //       id: '202320310313',
  //       content: '안녕하세요. 3 입니다.',
  //       image: 'images/exCatImg.png',
  //       createdAt: String,
  //       updatedAt: String,
  //       hearted: false,
  //       heartCount: 0,
  //       commentCount: 0,
  //       author: {
  //         _id: 'sorikikikim',
  //         username: '소링이',
  //         accountname: 'sorikikikim',
  //         intro: '',
  //         image: 'images/exDogImg.jpg',
  //         isfollow: false,
  //         following: [],
  //         follower: ['follower id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //     {
  //       id: '202320310313',
  //       content: '안녕하세요. 3 입니다.',
  //       image: 'images/exCatImg.png',
  //       createdAt: String,
  //       updatedAt: String,
  //       hearted: false,
  //       heartCount: 0,
  //       commentCount: 0,
  //       author: {
  //         _id: 'sorikikikim',
  //         username: '소링이',
  //         accountname: 'sorikikikim',
  //         intro: '',
  //         image: 'images/exDogImg.jpg',
  //         isfollow: false,
  //         following: [],
  //         follower: ['follower id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //     {
  //       id: '202320310313',
  //       content: '안녕하세요. 3 입니다.',
  //       image: 'images/exCatImg.png',
  //       createdAt: String,
  //       updatedAt: String,
  //       hearted: false,
  //       heartCount: 0,
  //       commentCount: 0,
  //       author: {
  //         _id: 'sorikikikim',
  //         username: '소링이',
  //         accountname: 'sorikikikim',
  //         intro: '',
  //         image: 'images/exDogImg.jpg',
  //         isfollow: false,
  //         following: [],
  //         follower: ['follower id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //     {
  //       id: '202320310313',
  //       content: '안녕하세요. 3 입니다.',
  //       image: 'images/exCatImg.png',
  //       createdAt: String,
  //       updatedAt: String,
  //       hearted: false,
  //       heartCount: 0,
  //       commentCount: 0,
  //       author: {
  //         _id: 'sorikikikim',
  //         username: '소링이',
  //         accountname: 'sorikikikim',
  //         intro: '',
  //         image: 'images/exDogImg.jpg',
  //         isfollow: false,
  //         following: [],
  //         follower: ['follower id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //   ],
  // };

  // const myProduct = {
  //   data: 5,
  //   product: [
  //     {
  //       id: String,
  //       itemName: '반려동물 파우치',
  //       price: 5000,
  //       link: String,
  //       itemImage: 'images/shoppingImg.png',
  //       author: {
  //         _id: '작성자 id',
  //         username: '2',
  //         accountname: '2',
  //         intro: '2',
  //         image: '2',
  //         isfollow: false,
  //         following: [],
  //         follower: ['팔로워 한 사용자의 id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //     {
  //       id: String,
  //       itemName: '반려동물 파우치',
  //       price: 5000,
  //       link: String,
  //       itemImage: 'images/shoppingImg.png',
  //       author: {
  //         _id: '작성자 id',
  //         username: '2',
  //         accountname: '2',
  //         intro: '2',
  //         image: '2',
  //         isfollow: false,
  //         following: [],
  //         follower: ['팔로워 한 사용자의 id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //     {
  //       id: String,
  //       itemName: '반려동물 파우치',
  //       price: 5000,
  //       link: String,
  //       itemImage: 'images/shoppingImg.png',
  //       author: {
  //         _id: '작성자 id',
  //         username: '2',
  //         accountname: '2',
  //         intro: '2',
  //         image: '2',
  //         isfollow: false,
  //         following: [],
  //         follower: ['팔로워 한 사용자의 id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //     {
  //       id: String,
  //       itemName: '반려동물 파우치',
  //       price: 5000,
  //       link: String,
  //       itemImage: 'images/shoppingImg.png',
  //       author: {
  //         _id: '작성자 id',
  //         username: '2',
  //         accountname: '2',
  //         intro: '2',
  //         image: '2',
  //         isfollow: false,
  //         following: [],
  //         follower: ['팔로워 한 사용자의 id'],
  //         followerCount: 1,
  //         followingCount: 0,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <Header type="post" />
      {userData && userProductData && userPostData && (
        <MyProfile
          myData={userData}
          myProduct={userProductData}
          myPost={userPostData}
        />
      )}
    </>
  );
}
