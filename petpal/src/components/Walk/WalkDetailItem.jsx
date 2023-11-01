import React from 'react';
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

// export default function WalkDetailItem({ location, walkDetailItem }) {
// 컴포넌트 분리 및 재사용 고려해서 다시 수정 예정 -> 산책, 돌보미 재사용
export default function WalkDetailItem({ walkDetailItem }) {
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

  return (
    <ComponentLayout>
      <DetailContainer>
        <PostTop>
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
          <Button
            type="button"
            children="채팅하기"
            size="xs"
            variant="primary"
          />
        </PostTop>
        {walkDetailItem.image ? (
          <PostImage src={walkDetailItem.image} alt="Post" />
        ) : null}
        <PostContent>{walkDetailItem.content}</PostContent>
        <PostBottom>
          <LikeAndChat>
            <InfoGroup className="likeAndChat">
              <LikeImg like={walkDetailItem.hearted} />
              <InfoSpan>{walkDetailItem.heartCount}</InfoSpan>
            </InfoGroup>
            <InfoGroup className="likeAndChat">
              <ChatImg />
              <InfoSpan>{walkDetailItem.commentCount}</InfoSpan>
            </InfoGroup>
          </LikeAndChat>
        </PostBottom>
        <Divider />
      </DetailContainer>
    </ComponentLayout>
  );
}
