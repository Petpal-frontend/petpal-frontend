import React from 'react';
import { ItemListContainer } from './WalkItemListStyle';
import {
  Divider,
  PostBottom,
  PostContent,
  PostImage,
  PostTop,
} from './WalkDetailItemStyle';
import Button from '../Common/Button/SubmitButton/Button';
import UserInfo from '../Common/Userinfo/UserInfo';
import { InfoGroup, InfoSpan, LikeAndChat } from './WalkItemStyle';
import { ChatImg, LikeImg } from '../Common/SpanImg/SpanImgStyle';
import Comment from '../Common/Comment/Comment';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';

// export default function WalkDetailItem({ location, walkDetailItem }) {
// 컴포넌트 분리 및 재사용 고려해서 다시 수정 예정 -> 산책, 돌보미 재사용
export default function WalkDetailItem({ walkDetailItem }) {
  const post = walkDetailItem.post[0];

  console.log(post.author);
  console.log(post.author.image);
  // console.log(post.author);
  // console.log(post[0].content);

  // console.log(location);
  // console.log(post);
  // console.log(index);

  // console.log(post[index]);
  const img = 'images/exDogImg.jpg';

  const comments = [
    {
      num: 1,
      like: 1,
    },
    {
      num: 1,
      like: 1,
    },
    {
      num: 1,
      like: 1,
    },
    {
      num: 1,
      like: 1,
    },
    {
      num: 1,
      like: 1,
    },
  ];

  return (
    <ComponentLayout>
      <ItemListContainer>
        <PostTop>
          <UserInfo img={post.image} username={post.author.username} />
          <Button
            type="button"
            children="채팅하기"
            size="xs"
            variant="primary"
          />
        </PostTop>
        <PostImage src={post.image} alt="Post" />
        <PostBottom>
          <LikeAndChat>
            <InfoGroup className="likeAndChat">
              <LikeImg like={post.hearted} />
              <InfoSpan>{post.heartCount}</InfoSpan>
            </InfoGroup>
            <InfoGroup className="likeAndChat">
              <ChatImg />
              <InfoSpan>{post.commentCount}</InfoSpan>
            </InfoGroup>
          </LikeAndChat>
          <PostContent>{post.content}</PostContent>
        </PostBottom>
        <Divider />
        <Comment comments={comments} />
      </ItemListContainer>
    </ComponentLayout>
  );
}
