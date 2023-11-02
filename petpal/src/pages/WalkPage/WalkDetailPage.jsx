import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import { getWalkDetail } from '../../api/walk';
import {
  getCommentList,
  uploadComment,
  deleteComment,
  reportComment,
} from '../../api/commentApi';
import Comment from '../../components/Common/Comment/Comment';
import useAlertControl from '../../components/Common/Modal/useAlertControl';
import Alert from '../../components/Common/Modal/Alert';

// export default function WalkDetailPage({ location }) {
export default function WalkDetailPage() {
  const { id, commentId } = useParams();

  const [walkDetailItem, setWalkDetailItem] = useState();
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [access, setAccess] = useState(null);
  const userState = useRecoilValue(userInfoAtom);
  console.log('userState', userState);
  const { openAlert, AlertComponent } = useAlertControl();
  const navigate = useNavigate();

  useEffect(() => {
    getWalkDetail(id).then(res => {
      setWalkDetailItem(res.data.post);
    });
  }, []);

  // 댓글 조회
  useEffect(() => {
    getCommentList(id).then(res => {
      setCommentList(res.data.comments);
      setAccess(res.data.comments[0].author.accountname);
      console.log('resresresresresres', res);
    });
  }, []);

  // 댓글 등록
  const handleChangeComment = e => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    if (newComment.trim() === '') {
      alert('댓글 내용을 입력해주세요.');
      return;
    }

    try {
      const response = await uploadComment(id, newComment);
      setNewComment('');
    } catch (error) {
      console.error('댓글 작성 실패:', error);
    }
  };

  // 댓글 삭제

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getCommentList(commentId);
  //       console.log('어카운트네임==' + userState.accountname);
  //       console.log('ㄹ리스폰스스스스', response);
  //       // console.log('데이터확인==' + response.data.comments.author.accountname);
  //       setAccess(response.data.comment.author.accoutname);
  //     } catch (error) {
  //       console.error('데이터를 불러오는 중 오류 발생:', error);
  //     }
  //   };

  //   fetchData();
  // }, [commentId]);

  const isAccessAllowed = access === userState.accountname;
  console.log('isAccessAllowed', isAccessAllowed);
  console.log('access', access);
  console.log('dfddfdfdfdf', userState.accountname);

  const deleteCommentReq = async () => {
    await deleteComment(id, commentId);
    navigate(-1);
  };

  const reportCommentReq = async () => {
    await reportCommentReq(id, commentId);
    console.log('댓글을 신고 완료했습니다.');
  };

  const handledelete = event => {
    if (event.target.textContent === '삭제') {
      deleteCommentReq();
    }
  };

  return (
    <>
      <Header type="post" title="" />
      {walkDetailItem && <WalkDetailItem walkDetailItem={walkDetailItem} />}
      {commentList && <Comment comments={commentList} openAlert={openAlert} />}
      {isAccessAllowed ? (
        <AlertComponent>
          <Alert
            alertMsg={'댓글을 삭제하시겠습니까?'}
            choice={['취소', '삭제']}
            handleFunc={handledelete}
          />
        </AlertComponent>
      ) : (
        <AlertComponent>
          <Alert
            alertMsg={'댓글을 신고하시겠습니까?'}
            choice={['취소', '신고']}
            handleFunc={handledelete}
          />
        </AlertComponent>
      )}
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
