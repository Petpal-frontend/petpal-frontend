import React from 'react';
import Post from '../../components/Common/Post/Post';

export default function CarePostPage({ id, placeholder }) {
  return (
    <>
      <Post
        title="돌보미 구인"
        id="PostContent"
        placeholder="게시글 입력하기..."
      />
    </>
  );
}
