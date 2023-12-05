import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import Header from '../../components/Common/Header/Header';
import ItemDetail from '../../components/WalkAndCare/ItemDetail';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import { getPostDetail } from '../../api/post';
import {
  getCommentList,
  uploadComment,
  deleteComment,
  reportComment,
} from '../../api/commentApi';
import Comment from '../../components/Common/Comment/Comment';
import { deletePost } from '../../api/post';
import useAlertControl from '../../components/Common/Modal/useAlertControl';
import Alert from '../../components/Common/Modal/Alert';

export default function WalkDetailPage() {
  const [walkDetailItem, setWalkDetailItem] = useState();
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [access, setAccess] = useState(null);
  const userState = useRecoilValue(userInfoAtom);
  const { openAlert, AlertComponent } = useAlertControl();
  const navigate = useNavigate();
  const { id } = useParams();
  const isAccessAllowed = access === userState.accountname;

  // -------- 게시물
  // 게시물 상세
  useEffect(() => {
    getPostDetail(id).then(res => {
      setWalkDetailItem(res.data.post);
      setAccess(res.data.post.author.accountname);
    });
  }, [id]);

  // 게시물 삭제
  const handleModal = event => {
    //walkEditPage로 state값과 함께 이동
    if (event.target.textContent === '수정') {
      navigate('/walkEdit', {
        state: {
          post: {
            id: walkDetailItem.id,
            content: walkDetailItem.content,
            image: walkDetailItem.image,
          },
        },
      });
    } else if (event.target.textContent === '삭제') {
      openAlert();
    }
  };

  const deletePostReq = async () => {
    await deletePost(id);
    navigate(-1);
  };

  const handledelete = event => {
    if (event.target.textContent === '삭제') {
      deletePostReq();
    }
  };

  // -------- 댓글
  // 댓글 조회
  useEffect(() => {
    getCommentList(id).then(res => {
      setCommentList(res.data.comments);
    });
  }, [id]);

  // 댓글 등록
  const handleEnterPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmitComment(event);
    }
  };

  const handleChangeComment = e => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = async e => {
    e.preventDefault();
    if (newComment.trim() === '') {
      alert('댓글 내용을 입력해주세요.');
    }

    try {
      const response = await uploadComment(id, newComment);
      const newCommentObj = {
        ...response.data.comment,
      };

      // 새 댓글을 댓글 목록에 추가
      setCommentList(prevComments => [newCommentObj, ...prevComments]);
      setNewComment('');
    } catch (error) {
      console.error('댓글 작성 실패', error);
    }
  };

  // 댓글 삭제 및 신고
  const handledeleteComment = async (commentId, commentMode) => {
    try {
      if (commentMode === 'delete') {
        await deleteComment(id, commentId);
        setCommentList(commentList.filter(comment => comment.id !== commentId));
      } else if (commentMode === 'report') {
        await reportComment(id, commentId);
      }
    } catch (error) {
      console.error('댓글 처리 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <>
      {isAccessAllowed ? (
        <Header type="myWalkDetail" onClick={handleModal} />
      ) : (
        <Header type="walkDetail" onClick={handleModal} />
      )}

      {walkDetailItem && (
        <ItemDetail
          itemDetail={walkDetailItem}
          commentNum={commentList.length}
        />
      )}
      {commentList && (
        <Comment
          comments={commentList}
          handledeleteComment={handledeleteComment}
        />
      )}
      <BottomInput
        id="comment"
        value={newComment}
        placeholder="댓글을 남겨보세요"
        onTextChange={handleChangeComment}
        onSubmit={handleSubmitComment}
        onEnterPress={handleEnterPress}
      />
      <AlertComponent>
        <Alert
          alertMsg={'게시물을 삭제하시겠습니까?'}
          choice={['취소', '삭제']}
          handleFunc={handledelete}
        />
      </AlertComponent>
    </>
  );
}
