import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import { useParams } from 'react-router-dom';
import { getWalkDetail } from '../../api/walk';
import { getCommentList, uploadComment } from '../../api/commentApi';
import Comment from '../../components/Common/Comment/Comment';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userInfoAtom } from '../../atoms/AtomUserState';
import useAlertControl from '../../components/Common/Modal/useAlertControl';
import Alert from '../../components/Common/Modal/Alert';
import { deletePost } from '../../api/post';
export default function WalkDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { openAlert, AlertComponent } = useAlertControl();
  const userState = useRecoilValue(userInfoAtom);
  const [access, setAccess] = useState(null);
  const [walkDetailItem, setWalkDetailItem] = useState();
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');
  useEffect(() => {
    getWalkDetail(params.id).then(res => {
      setWalkDetailItem(res.data.post);
      setAccess(res.data.post.author.accountname);
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

  const isAccessAllowed = access === userState.accountname;
  const handleModal = event => {
    //productEditPage로 아래의 값을 이동시켜주는 로직입니다
    if (event.target.textContent === '수정') {
      navigate('/productEdit', {
        // state: {
        //   product: {
        //     id: userProductData.product.id,
        //     itemName: userProductData.product.itemName,
        //     price: userProductData.product.price,
        //     link: userProductData.product.link,
        //     itemImage: userProductData.product.itemImage,
        //   },
        // },
      });
    } else if (event.target.textContent === '삭제') {
      openAlert();
    }
  };

  const deleteProductReq = async () => {
    await deletePost(params.id);
    navigate(-1);
  };

  const handledelete = event => {
    if (event.target.textContent === '삭제') {
      deleteProductReq();
    }
  };
  return (
    <>
      {isAccessAllowed ? (
        <Header type="myWalkDetail" onClick={handleModal} />
      ) : (
        <Header type="walkDetail" onClick={handleModal} />
      )}

      {walkDetailItem && <WalkDetailItem walkDetailItem={walkDetailItem} />}
      {commentList && <Comment comments={commentList} />}
      <BottomInput
        id="comment"
        value={newComment}
        placeholder="댓글을 남겨보세요"
        onChange={handleChangeComment}
        onSubmit={handleSubmitComment}
      />
      <AlertComponent>
        <Alert
          alertMsg={'상품을 삭제하시겠습니까?'}
          choice={['취소', '삭제']}
          handleFunc={handledelete}
        />
      </AlertComponent>
    </>
  );
}
