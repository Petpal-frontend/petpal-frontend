import React from 'react';
import { ChatImg, LikeImg, UserImg, PostUserImg } from './SpanImgStyle';

export default function SpanImg({ type, user, isLiked, post }) {
  switch (type) {
    case 'user':
      return <UserImg user={user} alt="사용자 프로필 이미지" />;
    case 'like':
      return <LikeImg isLiked={isLiked} alt="좋아요 아이콘" />;
    case 'chat':
      return <ChatImg alt="채팅 아이콘" />;
    case 'post':
      return <PostUserImg post={post} alt="게시한 사용자 프로필 이미지"/>;
    default:
      return null;
  }
}
