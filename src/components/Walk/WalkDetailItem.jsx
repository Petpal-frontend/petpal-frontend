import React, { useEffect, useState } from 'react';
import { InfoGroup, InfoSpan } from '../Common/Layout/LayoutStyle';
import {
  DetailContainer,
  Divider,
  PostBottom,
  PostContent,
  PostImage,
  PostTop,
  UserInfoBox,
  PostTime,
  NameAndTimeBox,
} from './WalkDetailItemStyle';
import Button from '../Common/Button/SubmitButton/Button';
import { UserImg, Username } from '../Common/Userinfo/UserInfoStyle';
import { LikeAndChat } from './WalkItemStyle';
import { ChatImg, LikeImg } from '../Common/SpanImg/SpanImgStyle';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';
import { likePost, unlikePost } from '../../api/post';
import { Link, useParams } from 'react-router-dom';
import { getWalkDetail } from '../../api/walk';
// export default function WalkDetailItem({ location, walkDetailItem }) {
// 컴포넌트 분리 및 재사용 고려해서 다시 수정 예정 -> 산책, 돌보미 재사용

export default function WalkDetailItem({ walkDetailItem, commentNum }) {
  const { id } = useParams();
  console.log('dfdfdfdf∂' + id);
  console.log('comment', commentNum);
  const imageArr = walkDetailItem.image
    ? walkDetailItem.image.split(',')
    : null;

  const [isLiked, setIsLiked] = useState(walkDetailItem.hearted);
  const [likeCount, setLikeCount] = useState(walkDetailItem.heartCount);

  const elapsedTime = date => {
    const start = new Date(date);
    const end = new Date();

    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return '방금 전';

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return `${start.toLocaleDateString()}`;
  };

  useEffect(() => {
    console.log(isLiked);
    console.log(likeCount);
    console.log(walkDetailItem.heartCount);
  }, [isLiked, likeCount]);

  const handleChatClick = async username => {
    try {
      const response = await getWalkDetail(id);
      const username = response.data.post.author.username;
      // 페이지 이동
      window.location.href = `/chatRoom/${username}`;
    } catch (error) {
      console.error('상품 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };

  return (
    <ComponentLayout className='detailComponent'>
      <DetailContainer>
        <PostTop>
          <Link
            to={`/yourProfile/${walkDetailItem.author.accountname}`}
            className="profileInfo"
          >
            <UserInfoBox>
              <UserImg
                src={walkDetailItem.author.image}
                style={{ width: '50px', height: '50px' }}
                alt="프로필 이미지"
              />
              <NameAndTimeBox>
                <Username>{walkDetailItem.author.username}</Username>
                <PostTime>
                  {`${elapsedTime(new Date(walkDetailItem.createdAt))}`}
                </PostTime>
              </NameAndTimeBox>
            </UserInfoBox>
          </Link>
          <Button
            onClick={handleChatClick}
            type="button"
            children="채팅하기"
            size="xs"
            variant="primary"
          />
        </PostTop>
        {imageArr
          ? imageArr.map(img => <PostImage src={img} alt="Post" />)
          : null}
        <PostContent>
          {walkDetailItem.content.includes('petpal_walk_')
            ? walkDetailItem.content.split('petpal_walk_')
            : walkDetailItem.content.split('petpal_care_')}
        </PostContent>
        <PostBottom>
          <LikeAndChat>
            <InfoGroup className="likeAndChat">
              {/* <LikeImg like={walkDetailItem.hearted} /> */}
              <LikeImg
                like={isLiked}
                onClick={async () => {
                  if (isLiked) {
                    try {
                      await unlikePost(walkDetailItem.id);
                      setIsLiked(false);
                      setLikeCount(likeCount - 1);
                    } catch (error) {
                      console.error(error);
                    }
                  } else {
                    try {
                      await likePost(walkDetailItem.id);
                      setIsLiked(true);
                      setLikeCount(likeCount + 1);
                    } catch (error) {
                      console.error(error);
                    }
                  }
                }}
              />
              <InfoSpan>{likeCount}</InfoSpan>
            </InfoGroup>
            <InfoGroup className="likeAndChat">
              <ChatImg />
              <InfoSpan>{commentNum ? commentNum : 0}</InfoSpan>
            </InfoGroup>
          </LikeAndChat>
        </PostBottom>
        <Divider />
      </DetailContainer>
    </ComponentLayout>
  );
}
