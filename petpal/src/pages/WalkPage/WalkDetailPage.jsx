import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import { useParams } from 'react-router-dom';
import { getWalkDetail } from '../../api/walk';
import { getCommentList } from '../../api/commentApi';
import Comment from '../../components/Common/Comment/Comment';

// export default function WalkDetailPage({ location }) {
export default function WalkDetailPage() {
  const params = useParams();

  const [walkDetailItem, setWalkDetailItem] = useState();
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getWalkDetail(params.id).then(res => {
      setWalkDetailItem(res.data.post);
    });
  }, []);

  useEffect(() => {
    getCommentList(params.id).then(res => {
      setCommentList(res.data.comments);
      console.log(commentList);
    });
  }, []);

  return (
    <>
      <Header type="post" title="" />
      {walkDetailItem && commentList && (
        <WalkDetailItem
          walkDetailItem={walkDetailItem}
          commentList={commentList}
        />
      )}
      <BottomInput id="comment" placeholder="댓글을 남겨보세요" />
    </>
  );
}
