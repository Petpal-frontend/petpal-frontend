import React, { useEffect, useState } from 'react';
import PostEdit from '../../components/Common/Post/PostEdit';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import { getWalkDetail } from '../../api/walk';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function WalkEditPage() {
  const location = useLocation();
  const userState = useRecoilValue(userInfoAtom);
  const { post } = location.state;

  const [beforePostData, setBeforePostData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWalkDetail(post.id);
        setBeforePostData(response.data);
        console.log('데이터 불러오기 성공:', response.data);
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
          title="산책메이트"
          id="PostContent"
          placeholder={beforePostData.post.content}
          beforePostData={beforePostData}
          // value={beforePostData.post.content}
        />
      )}
    </>
  );
}
