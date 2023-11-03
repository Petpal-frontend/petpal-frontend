import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import MyProfile from '../../components/Profile/MyProfile';
import { userInfoAtom } from '../../atoms/AtomUserState';
import { useRecoilValue } from 'recoil';
import { getMyProfile } from '../../api/profile';
import { getMyProduct } from '../../api/product';
import { getMyPost } from '../../api/post';
import { useNavigate } from 'react-router-dom';
import useAlertControl from '../../components/Common/Modal/useAlertControl';
import Alert from '../../components/Common/Modal/Alert';

export default function ProfilePage() {
  const navigate = useNavigate();
  const userState = useRecoilValue(userInfoAtom);
  const [userData, setUserData] = useState(null);
  const [userProductData, setUserProductData] = useState(null);
  const [userPostData, setUserPostData] = useState(null);
  const { openAlert, AlertComponent } = useAlertControl();
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(userState);
        const profileResponse = await getMyProfile(userState.token);
        const productResponse = await getMyProduct(userState.accountname);
        const postResponse = await getMyPost(userState.accountname);
        // console.log('어카운트네임!==' + userState.accountname);
        // console.log('데이터확인!==' + postResponse.data.post[0].content);
        setUserData(profileResponse.data);
        setUserProductData(productResponse.data);
        setUserPostData(postResponse.data);
        console.log(userData);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [userState.token, userState.accountname]);

  const handleLogout = event => {
    if (event.target.textContent === '로그아웃') {
      localStorage.clear();
      navigate('/login');
    }
  };

  const handleModal = event => {
    if (event.target.textContent === '설정 및 개인정보') {
    } else if (event.target.textContent === '로그아웃') {
      openAlert();
    }
  };
  return (
    <>
      <Header type="profile" onClick={handleModal} />
      {userData && userProductData && userPostData && (
        <MyProfile
          myData={userData}
          myProduct={userProductData}
          myPost={userPostData}
        />
      )}
      <AlertComponent>
        <Alert
          alertMsg={'로그아웃 하시겠습니까?'}
          choice={['취소', '로그아웃']}
          handleFunc={handleLogout}
        />
      </AlertComponent>
    </>
  );
}
