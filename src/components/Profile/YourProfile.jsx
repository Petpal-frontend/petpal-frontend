import React, { useState } from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
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
import { deleteFollow, postFollow } from '../../api/follow';
import { FollowItemButton } from '../Follow/FollowButtonStyle';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';

export default function YourProfile({ yourData, yourProduct, yourPost }) {
  const [isFollow, setIsFollow] = useState(yourData.profile.isfollow);
  const [followerCount, setFollowerCount] = useState(
    yourData.profile.followerCount,
  );
  const userInfo = useRecoilValue(userInfoAtom);

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
      window.location.href = `/productDetail/${productId}`;
    } catch (error) {
      console.error('상품 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };

  const handlePostClick = async postId => {
    try {
      const response = await getCareDetail(postId);
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
      <ItemListContainer className="profile">
        <ProfileContainer>
          <Link to={`/profile/${userAccountName}/follower`}>
            {/* <FollowNum>{yourData.profile.followerCount}</FollowNum> */}
            <FollowNum>{followerCount}</FollowNum>
            <FollowSpan>followers</FollowSpan>
          </Link>
          <UserProfileImage src={yourData.profile.image} alt="User Profile" />
          <Link to={`/profile/${userAccountName}/following`}>
            <FollowNum>{yourData.profile.followingCount}</FollowNum>
            <FollowSpan>followings</FollowSpan>
          </Link>
        </ProfileContainer>
        <Username>{yourData.profile.username}</Username>
        {userInfo.accountname !== yourData.profile.accountname ? (
          <ButtonContainer>
            <FollowItemButton
              onClick={isFollow ? fetchDeleteFollowData : fetchPostFollowData}
              className={isFollow ? 'follow' : ''}
            >
              {isFollow ? '취소' : '팔로우'}
            </FollowItemButton>
          </ButtonContainer>
        ) : null}
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
                  <Description>
                    {item.price.toLocaleString('ko-KR')}원
                  </Description>
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
