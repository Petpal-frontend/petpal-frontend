import React from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
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

export default function YourProfile({ yourData, yourProduct, yourPost }) {
  return (
    <ComponentLayout>
      <ItemListContainer>
        <ProfileContainer>
          <FollowDiv>
            <FollowNum>{yourData.profile.followerCount}</FollowNum>
            <FollowSpan>followers</FollowSpan>
          </FollowDiv>
          <UserProfileImage src="images/exDogImg.jpg" alt="User Profile" />
          <FollowDiv>
            <FollowNum>{yourData.profile.followingCount}</FollowNum>
            <FollowSpan>followings</FollowSpan>
          </FollowDiv>
        </ProfileContainer>
        <Username>{yourData.profile.username}</Username>
        <ButtonContainer>
          {yourData.profile.isfollow ? (
            <Button
              type="button"
              size="xs"
              variant="white"
              children="팔로우 취소"
            />
          ) : (
            <Button
              type="button"
              size="xs"
              variant="primary"
              children="팔로우"
            />
          )}
        </ButtonContainer>
      </ItemListContainer>
      <ListContainer>
        <H3>판매 중인 상품</H3>
        <ProductItemContainer>
          {yourProduct.data > 0 ? (
            yourProduct.product.map((item, index) => (
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
              현재 {yourData.profile.username}님이 판매 중인 상품이 없습니다.
            </WarningMessage>
          )}
        </ProductItemContainer>
      </ListContainer>
      <ListContainer>
        <H3>게시글</H3>
        <PostItemContainer>
          {yourPost.post.length > 0 ? (
            yourPost.post.map((item, index) => (
              <Image src={item.image} alt="postImage" key={index} />
            ))
          ) : (
            <WarningMessage>
              {yourData.profile.username}님의 게시글이 없습니다.
            </WarningMessage>
          )}
        </PostItemContainer>
      </ListContainer>
    </ComponentLayout>
  );
}
