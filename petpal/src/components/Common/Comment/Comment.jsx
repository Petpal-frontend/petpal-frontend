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
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../atoms/AtomUserState';
import useAlertControl from '../Modal/useAlertControl';
import Alert from '../Modal/Alert';

export default function Comment({ comments, handledeleteComment }) {
  const moreBtn = '/images/icon-more-vertical.svg';
  const reversedComments = comments.slice().reverse();
  const userState = useRecoilValue(userInfoAtom);
  const { openAlert, AlertComponent } = useAlertControl();

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
          <MoreButton onClick={() => openAlert()}>
            <ButtonImg src={moreBtn} />
          </MoreButton>
          {item.author.accountname === userState.accountname ? (
            <AlertComponent>
              <Alert
                alertMsg={'댓글을 삭제하시겠습니까?'}
                choice={['취소', '삭제']}
                handleFunc={handledeleteComment}
              />
            </AlertComponent>
          ) : (
            <AlertComponent>
              <Alert
                alertMsg={'댓글을 신고하시겠습니까?'}
                choice={['취소', '신고']}
                handleFunc={handledeleteComment}
              />
            </AlertComponent>
          )}
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}
