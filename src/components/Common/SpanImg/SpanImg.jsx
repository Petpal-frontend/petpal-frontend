import React from 'react';
import { ChatImg, LikeImg, UserImg, PostUserImg } from './SpanImgStyle';

export default function SpanImg({ type, user, isLiked, post }) {
  switch (type) {
    case 'user':
      return <UserImg user={user} />;
    case 'like':
      return <LikeImg isLiked={isLiked} />;
    case 'chat':
      return <ChatImg />;
    case 'post':
      return <PostUserImg post={post} />;
    default:
      return null;
  }
}
