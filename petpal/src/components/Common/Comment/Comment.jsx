import React from 'react';
import {
  CommentContainer,
  CommentContent,
  CommentText,
  CommentsContainer,
} from './CommentStyle';
import { UserImg, Username } from '../Userinfo/UserInfoStyle';

export default function Comment({ comments }) {
  console.log('comments!!!!!!', comments);
  return (
    <CommentsContainer>
      {comments.map((item, index) => (
        <CommentContainer key={index}>
          <UserImg src={item.author.image} alt={'comment profile'} />
          <CommentContent>
            <Username>{item.author.username}</Username>
            <CommentText>{item.content}</CommentText>
          </CommentContent>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}
