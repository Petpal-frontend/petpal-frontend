import React, { useState } from 'react';
import {
  CommentContainer,
  CommentContent,
  CommentText,
  CommentsContainer,
  CommentTime,
  MoreButton,
  ButtonImg,
} from './CommentStyle';
import { UserImg, Username } from '../Userinfo/UserInfoStyle';

export default function Comment({ comments, onModalHandler }) {
  const moreBtn = '/images/icon-more-vertical.svg';
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

  const reversedComments = comments.slice().reverse();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림
  const [commentToDelete, setCommentToDelete] = useState(null); // 삭제할 댓글 정보

  return (
    <CommentsContainer>
      {reversedComments.map((item, index) => (
        <CommentContainer key={index}>
          <UserImg src={item.author.image} alt="프로필 이미지" />
          <CommentContent>
            <Username>{item.author.username}</Username>
            <CommentTime>
              {`· ${elapsedTime(new Date(item.createdAt))}`}
            </CommentTime>
            <CommentText>{item.content}</CommentText>
          </CommentContent>
          <MoreButton onClick={onModalHandler}>
            <ButtonImg src={moreBtn} />
          </MoreButton>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}
