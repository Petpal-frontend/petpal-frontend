import React, { useState } from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import { getPostDetail } from '../../api/post';
import Button from '../Common/Button/SubmitButton/Button';
import { Link } from 'react-router-dom';
import { getProductDetail } from '../../api/product';
import {
  ButtonContainer,
  Description,
  FollowNum,
  FollowSpan,
  H3,
  Image,
  ItemDiv,
  ListContainer,
  PostItemContainer,
  ProductItemContainer,
  ProfileContainer,
  TextSection,
  Title,
  UserProfileImage,
  Username,
  WarningMessage,
} from './MyProfileStyle';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';
import profileImg from '../../assets/image/profile.png';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';

export default function MyProfile({ myData, myProduct, myPost }) {
  const userInfo = useRecoilValue(userInfoAtom);

  const handleProductClick = async productId => {
    try {
      const response = await getProductDetail(productId);
      window.location.href = `/productDetail/${productId}`;
    } catch (error) {
      console.error('상품 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };

  const handlePostClick = async postId => {
    try {
      const response = await getPostDetail(postId);
      const path = response.data.post.content.includes('petpal_walk')
        ? `/walkDetail/${postId}`
        : `/careDetail/${postId}`;

      window.location.href = path;
    } catch (error) {
      console.error('상품 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };

  return (
    <ComponentLayout>
      {/* 내 프로필, 상대 프로필 재사용 */}
      <ItemListContainer className="profile">
        <ProfileContainer>
          <Link to={`/profile/${userInfo.accountname}/follower`}>
            <FollowNum>{myData.user.followerCount}</FollowNum>
            <FollowSpan>followers</FollowSpan>
          </Link>
          <UserProfileImage src={myData.user.image} alt="User Profile" />
          <Link to={`/profile/${userInfo.accountname}/following`}>
            <FollowNum>{myData.user.followingCount}</FollowNum>
            <FollowSpan>followings</FollowSpan>
          </Link>
        </ProfileContainer>
        <Username>{myData.user.username}</Username>
        <ButtonContainer>
          <Link to="/profileEdit">
            <Button
              type="button"
              size="xs"
              variant="white"
              children="프로필 수정"
            />
          </Link>
          <Link to="/productPost">
            <Button
              type="button"
              size="xs"
              variant="primary"
              children="상품 등록"
            />
          </Link>
        </ButtonContainer>
      </ItemListContainer>
      {/* 내 프로필, 상대 프로필 재사용 */}
      <ListContainer>
        <H3>판매 중인 상품</H3>
        <ProductItemContainer>
          {myProduct.data > 0 ? (
            myProduct.product.map((item, index) => (
              <ItemDiv key={index} onClick={() => handleProductClick(item.id)}>
                <img src={item.itemImage} alt="productImage" />

                <TextSection>
                  <Title>{item.itemName}</Title>
                  <Description>
                    {item.price.toLocaleString('ko-KR')}원
                  </Description>
                </TextSection>
              </ItemDiv>
            ))
          ) : (
            <WarningMessage>
              현재 {myData.user.username}님이 판매 중인 상품이 없습니다.
            </WarningMessage>
          )}
        </ProductItemContainer>
      </ListContainer>
      <ListContainer>
        <H3>게시글</H3>
        <PostItemContainer>
          {myPost.post.length > 0 ? (
            myPost.post.map((item, index) => {
              let imageArr = item.image ? item.image.split(',') : [profileImg];
              return (
                <Image
                  src={imageArr[0]}
                  alt="postImage"
                  key={index}
                  onClick={() => handlePostClick(item.id)}
                />
              );
            })
          ) : (
            <WarningMessage>
              {myData.user.username}님의 게시글이 없습니다.
            </WarningMessage>
          )}
        </PostItemContainer>
      </ListContainer>
    </ComponentLayout>
  );
}
