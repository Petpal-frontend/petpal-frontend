import React from 'react';
import { CommentContainer, CommentContent, CommentText, CommentsContainer } from './CommentStyle';
import { UserImg, Username } from '../Userinfo/UserInfoStyle';

export default function Comment({ comments }) {
  return (
    <CommentsContainer>
      {comments.map((item, index) => (
        <CommentContainer>
          <UserImg src={'images/exDogImg.jpg'} alt={'comment profile'} />
          <CommentContent>
            <Username>{'sori'}</Username>
            <CommentText>{'comment'}</CommentText>
          </CommentContent>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}
