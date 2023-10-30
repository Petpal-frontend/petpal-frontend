import React from 'react';
import { ItemListContainer } from '../Walk/WalkItemListStyle';
import Button from '../Common/Button/SubmitButton/Button';
import {
  ButtonContainer,
  Description,
  FollowDiv,
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

export default function MyProfile({ myData, myProduct, myPost }) {
  return (
    <ComponentLayout>
      {/* 컴포넌트로 분리 예정 -> 내 프로필, 상대 프로필 재사용 */}
      <ItemListContainer>
        <ProfileContainer>
          <FollowDiv>
            <FollowNum>{myData.user.followerCount}</FollowNum>
            <FollowSpan>followers</FollowSpan>
          </FollowDiv>
          <UserProfileImage src={myData.user.image} alt="User Profile" />
          <FollowDiv>
            <FollowNum>{myData.user.followingCount}</FollowNum>
            <FollowSpan>followings</FollowSpan>
          </FollowDiv>
        </ProfileContainer>
        <Username>{myData.user.username}</Username>
        <ButtonContainer>
          <Button
            type="button"
            size="xs"
            variant="white"
            children="프로필 수정"
          />
          <Button
            type="button"
            size="xs"
            variant="primary"
            children="상품 등록"
          />
        </ButtonContainer>
      </ItemListContainer>
      {/* 컴포넌트로 분리 예정 -> 내 프로필, 상대 프로필 재사용 */}
      <ListContainer>
        <H3>판매 중인 상품</H3>
        <ProductItemContainer>
          {myProduct.data > 0 ? (
            myProduct.product.map((item, index) => (
              <ItemDiv key={index}>
                <img src={item.itemImage} alt="productImage" />
                <TextSection>
                  <Title>{item.itemName}</Title>
                  <Description>{item.price}원</Description>
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
            myPost.post.map((item, index) => (
              <Image src={item.author.image} alt="postImage" key={index} />
            ))
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
