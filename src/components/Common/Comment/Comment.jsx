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
import { Link } from 'react-router-dom';
import moreBtn from '../../../assets/image/icon-more-vertical.svg'

export default function Comment({ comments, handledeleteComment }) {
  const reversedComments = comments.slice().reverse();
  const userState = useRecoilValue(userInfoAtom);
  const { openAlert, AlertComponent } = useAlertControl();
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  // '더 보기' 버튼 클릭 처리 함수
  const handleMoreButtonClick = commentId => {
    // 선택된 댓글의 ID를 상태에 저장
    setSelectedCommentId(commentId);
    openAlert();
  };

  console.log('userStateuserState', userState);
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
          <Link
            to={`/yourProfile/${item.author.accountname}`}
            className="profileInfo"
          >
            <UserImg src={item.author.image} alt="프로필 이미지" />
          </Link>
          <CommentContent>
            <Link
              to={`/yourProfile/${item.author.accountname}`}
              className="profileInfo"
            >
              <Username>{item.author.username}</Username>
            </Link>
            <CommentTime>
              {`· ${elapsedTime(new Date(item.createdAt))}`}
            </CommentTime>
            <CommentText>{item.content}</CommentText>
          </CommentContent>
          <MoreButton onClick={() => handleMoreButtonClick(item.id)}>
            <ButtonImg src={moreBtn} />
          </MoreButton>
          {item.author.accountname === userState.accountname ? (
            <AlertComponent>
              <Alert
                alertMsg={'댓글을 삭제하시겠습니까?'}
                choice={['취소', '삭제']}
                handleFunc={() => handledeleteComment(item.id, 'delete')}
              />
            </AlertComponent>
          ) : (
            <AlertComponent>
              <Alert
                alertMsg={'댓글을 신고하시겠습니까?'}
                choice={['취소', '신고']}
                handleFunc={() => handledeleteComment(item.id, 'report')}
              />
            </AlertComponent>
          )}
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}
