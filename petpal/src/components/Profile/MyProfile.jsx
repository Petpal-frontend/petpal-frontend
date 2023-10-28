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
} from './MyProfileStyle';

export default function MyProfile({ myData, myProduct, myPost }) {
  return (
    <>
      <ItemListContainer>
        <ProfileContainer>
          <FollowDiv>
            <FollowNum>{myData.user.followerCount}</FollowNum>
            <FollowSpan>followers</FollowSpan>
          </FollowDiv>
          <UserProfileImage src="images/exDogImg.jpg" alt="User Profile" />
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
      <ListContainer>
        <H3>판매중인 상품</H3>
        <ProductItemContainer>
          {myProduct.product.map((item, index) => (
            <ItemDiv>
              <img src={item.itemImage} alt="productImage" />
              <TextSection>
                <Title>{item.itemName}</Title>
                <Description>{item.price}원</Description>
              </TextSection>
            </ItemDiv>
          ))}
        </ProductItemContainer>
      </ListContainer>
      <ListContainer>
        <H3>게시글</H3>
        <PostItemContainer>
          {myPost.post.map((item, index) => (
            <Image src={item.image} alt="postImage" />
          ))}
        </PostItemContainer>
      </ListContainer>
    </>
  );
}
