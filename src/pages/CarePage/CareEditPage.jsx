import React, { useEffect, useState } from 'react';
import PostEdit from '../../components/Common/Post/PostEdit';
import { useLocation } from 'react-router-dom';
import { getPostDetail } from '../../api/post';

export default function CareEditPage() {
  const location = useLocation();
  const { post } = location.state;
  const [beforePostData, setBeforePostData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostDetail(post.id);
        setBeforePostData(response.data);
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
      }
    };
    fetchData();
  }, [post.id]);

  return (
    <>
      {beforePostData && (
        <PostEdit
          title="돌보미구인"
          type="care"
          id="PostContent"
          placeholder="게시글 입력하기..."
          beforePostData={beforePostData}
          value={beforePostData.post.content}
        />
      )}
    </>
  );
}
