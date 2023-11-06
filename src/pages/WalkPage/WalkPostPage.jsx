import React from 'react';
import Post from '../../components/Common/Post/Post';

export default function WalkPostPage() {
  return (
    <>
      <Post
        title="산책메이트"
        type="walk"
        id="PostContent"
        placeholder="게시글 입력하기..."
      />
    </>
  );
}
