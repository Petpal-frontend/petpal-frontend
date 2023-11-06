import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import ProfileEditForm from '../../components/Profile/ProfileEditForm';
import { getMyProfile } from '../../api/profile';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';

export default function ProfileEditPage() {
  const userState = useRecoilValue(userInfoAtom);
  const [beforeUserData, setBeforeUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyProfile(userState);
        setBeforeUserData(data.data.user);
        // console.log(beforeUserData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [userState]);

  return (
    <>
      <Header type="post" />
      {beforeUserData && <ProfileEditForm beforeUserData={beforeUserData} />}
    </>
  );
}
