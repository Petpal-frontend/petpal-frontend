import React, { useState } from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import Button from '../Common/Button/SubmitButton/Button';
import { getProductDetail } from '../../api/product';
import { getCareDetail } from '../../api/care';
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
import { Link, useParams } from 'react-router-dom';
// import FollowButton from '../Follow/FollowButton';
import { deleteFollow, postFollow } from '../../api/follow';
import { FollowItemButton } from '../Follow/FollowButtonStyle';

export default function YourProfile({ yourData, yourProduct, yourPost }) {
  const [isFollow, setIsFollow] = useState(yourData.profile.isfollow);
  const [followerCount, setFollowerCount] = useState(
    yourData.profile.followerCount,
  );
  console.log('isFollow', isFollow);
  console.log('followerCount', yourData.profile.followerCount);

  /* 팔로우 */
  const fetchPostFollowData = async () => {
    const data = await postFollow(yourData.profile.accountname); // 해당 유저의 accountname
    setIsFollow(!isFollow);
    setFollowerCount(followerCount + 1);
  };

  /* 언팔로우 */
  const fetchDeleteFollowData = async () => {
    const data = await deleteFollow(yourData.profile.accountname); // 해당 유저의 accountname
    setIsFollow(!isFollow);
    setFollowerCount(followerCount - 1);
  };

  const userAccountName = useParams().accountname;

  const handleProductClick = async productId => {
    try {
      const response = await getProductDetail(productId);
      // 페이지 이동
      window.location.href = `/productDetail/${productId}`;
    } catch (error) {
      console.error('상품 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };

  const handlePostClick = async postId => {
    try {
      const response = await getCareDetail(postId);
      // const path = response.data.post.content;
      const path = response.data.post.content.includes('petpal_walk')
        ? `/walkDetail/${postId}`
        : `/careDetail/${postId}`;

      window.location.href = path;
      // 페이지 이동
      // window.location.href = `/walkDetail/${postId}`;
    } catch (error) {
      console.error('상품 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };
  return (
    <ComponentLayout>
      <ItemListContainer>
        <ProfileContainer>
          <Link to={`/profile/${userAccountName}/follower`}>
            {/* <FollowNum>{yourData.profile.followerCount}</FollowNum> */}
            <FollowNum>{followerCount}</FollowNum>
            <FollowSpan>followers</FollowSpan>
          </Link>
          <UserProfileImage src="images/exDogImg.jpg" alt="User Profile" />
          <Link to={`/profile/${userAccountName}/following`}>
            <FollowNum>{yourData.profile.followingCount}</FollowNum>
            <FollowSpan>followings</FollowSpan>
          </Link>
        </ProfileContainer>
        <Username>{yourData.profile.username}</Username>
        <ButtonContainer>
          {/* {yourData.profile.isfollow ? (
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
          )} */}
          {/* <FollowButton item={yourData.profile} /> */}
          <FollowItemButton
            onClick={isFollow ? fetchDeleteFollowData : fetchPostFollowData}
            className={isFollow ? 'follow' : ''}
          >
            {isFollow ? '취소' : '팔로우'}
          </FollowItemButton>
        </ButtonContainer>
      </ItemListContainer>
      <ListContainer>
        <H3>판매 중인 상품</H3>
        <ProductItemContainer>
          {yourProduct.data > 0 ? (
            yourProduct.product.map((item, index) => (
              <ItemDiv key={index} onClick={() => handleProductClick(item.id)}>
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
            yourPost.post.map((item, index) => {
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
              {yourData.profile.username}님의 게시글이 없습니다.
            </WarningMessage>
          )}
        </PostItemContainer>
      </ListContainer>
    </ComponentLayout>
  );
}
