import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import { useParams } from 'react-router-dom';
import { getWalkDetail } from '../../api/walk';
import { getCommentList, uploadComment } from '../../api/commentApi';
import Comment from '../../components/Common/Comment/Comment';

// export default function WalkDetailPage({ location }) {
export default function WalkDetailPage() {
  const params = useParams();

  const [walkDetailItem, setWalkDetailItem] = useState();
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');

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

  const handleChangeComment = e => {
    setNewComment(e.target.value); // 입력된 댓글 내용을 상태에 업데이트
  };

  const handleSubmitComment = async () => {
    if (newComment.trim() === '') {
      // 댓글 내용이 공백인지 확인
      alert('댓글 내용을 입력해주세요.');
      return;
    }

    try {
      const response = await uploadComment(params.id, newComment);
      setNewComment('');
    } catch (error) {
      console.error('댓글 작성 실패:', error);
    }
  };

  return (
    <>
      <Header type="post" title="" />
      {walkDetailItem && <WalkDetailItem walkDetailItem={walkDetailItem} />}
      {commentList && <Comment comments={commentList} />}
      <BottomInput
        id="comment"
        value={newComment}
        placeholder="댓글을 남겨보세요"
        onChange={handleChangeComment}
        onSubmit={handleSubmitComment}
      />
    </>
  );
}
