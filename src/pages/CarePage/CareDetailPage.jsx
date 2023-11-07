import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import Comment from '../../components/Common/Comment/Comment';
import { useParams, useNavigate } from 'react-router-dom';
import { getCareDetail } from '../../api/care';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import useAlertControl from '../../components/Common/Modal/useAlertControl';
import Alert from '../../components/Common/Modal/Alert';
import { deletePost } from '../../api/post';
import {
  getCommentList,
  uploadComment,
  deleteComment,
  reportComment,
} from '../../api/commentApi';

export default function CareDetailPage() {
  const { id } = useParams();
  const [access, setAccess] = useState(null);
  const [careDetailItem, setCareDetailItem] = useState();
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');
  const userState = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();
  const { openAlert, AlertComponent } = useAlertControl();

  useEffect(() => {
    getCareDetail(id).then(res => {
      setCareDetailItem(res.data.post);
      setAccess(res.data.post.author.accountname);
    });
  }, [id]);
  const isAccessAllowed = access === userState.accountname;

  const handleModal = event => {
    //careEditPage로 state의 값을 가지고 이동
    if (event.target.textContent === '수정') {
      navigate('/careEdit', {
        state: {
          post: {
            id: careDetailItem.id,
            content: careDetailItem.content,
            image: careDetailItem.image,
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
        <Header type="myCareDetail" onClick={handleModal} />
      ) : (
        <Header type="careDetail" onClick={handleModal} />
      )}
      {careDetailItem && (
        <WalkDetailItem
          walkDetailItem={careDetailItem}
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
