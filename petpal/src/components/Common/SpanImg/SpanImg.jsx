import React from 'react';
import { ChatImg, LikeImg, UserImg } from './SpanImgStyle';

export default function SpanImg({ type, user, isLiked }) {
  switch (type) {
    case 'user':
      return <UserImg user={user} />;
    case 'like':
      return <LikeImg isLiked={isLiked} />;
    case 'chat':
      return <ChatImg />;
    default:
      return null;
  }
}
