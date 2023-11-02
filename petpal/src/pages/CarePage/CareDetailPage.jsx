import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import { useParams, useNavigate } from 'react-router-dom';
import { getCareDetail } from '../../api/care';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import useAlertControl from '../../components/Common/Modal/useAlertControl';
import Alert from '../../components/Common/Modal/Alert';
import { deletePost } from '../../api/post';
export default function CareDetailPage() {
  const params = useParams();
  const [access, setAccess] = useState(null);
  const [careDetailItem, setCareDetailItem] = useState();
  const userState = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();
  const { openAlert, AlertComponent } = useAlertControl();

  useEffect(() => {
    getCareDetail(params.id).then(res => {
      setCareDetailItem(res.data.post);
      setAccess(res.data.post.author.accountname);
    });
  }, [params.id]);
  const isAccessAllowed = access === userState.accountname;

  const handleModal = event => {
    //careEditPage로 아래의 값을 이동시켜주는 로직입니다
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
    await deletePost(params.id);
    navigate(-1);
  };

  const handledelete = event => {
    if (event.target.textContent === '삭제') {
      deletePostReq();
    }
  };

  return (
    <>
      {isAccessAllowed ? (
        <Header type="myCareDetail" onClick={handleModal} />
      ) : (
        <Header type="careDetail" onClick={handleModal} />
      )}
      {careDetailItem && <WalkDetailItem walkDetailItem={careDetailItem} />}
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
