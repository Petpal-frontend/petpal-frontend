import React from 'react';
import { InfoGroup, InfoSpan } from '../Common/Layout/LayoutStyle';
import {
  DetailContainer,
  Divider,
  PostBottom,
  PostContainer,
  PostContent,
  PostImage,
  PostTop,
} from './WalkDetailItemStyle';
import Button from '../Common/Button/SubmitButton/Button';
import UserInfo from '../Common/Userinfo/UserInfo';
import { LikeAndChat } from './WalkItemStyle';
import { ChatImg, LikeImg } from '../Common/SpanImg/SpanImgStyle';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';

// export default function WalkDetailItem({ location, walkDetailItem }) {
// 컴포넌트 분리 및 재사용 고려해서 다시 수정 예정 -> 산책, 돌보미 재사용
export default function WalkDetailItem({ walkDetailItem }) {
  // const comments = [
  //   {
  //     num: 1,
  //     like: 1,
  //   },
  //   {
  //     num: 1,
  //     like: 1,
  //   },
  //   {
  //     num: 1,
  //     like: 1,
  //   },
  //   {
  //     num: 1,
  //     like: 1,
  //   },
  //   {
  //     num: 1,
  //     like: 1,
  //   },
  // ];

  return (
    <ComponentLayout>
      <DetailContainer>
        <PostTop>
          <UserInfo
            img={walkDetailItem.author.image}
            username={walkDetailItem.author.username}
          />
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
