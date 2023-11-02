import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import YourProfile from '../../components/Profile/YourProfile';
import { getYourProfile } from '../../api/profile';
import { getMyProduct } from '../../api/product';
import { getMyPost } from '../../api/post';
import { useParams } from 'react-router-dom';

export default function YourProfilePage() {
  const params = useParams();
  const accountname = params.accountname;
  console.log('111111', accountname);
  const [yourData, setYourData] = useState();
  const [yourProduct, setYourProduct] = useState();
  const [yourPost, setYourPost] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const yourDataRes = await getYourProfile(accountname);
        const yourProductRes = await getMyProduct(accountname);
        const yourPostRes = await getMyPost(accountname);

        setYourData(yourDataRes.data);
        setYourProduct(yourProductRes.data);
        setYourPost(yourPostRes.data);
        console.log('2222', yourData);
        console.log('3333', yourProduct);
        console.log('4444', yourPost);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [accountname]);

  return (
    <>
      <Header type="post" />
      {yourData && yourProduct && yourPost && (
        <YourProfile
          yourData={yourData}
          yourProduct={yourProduct}
          yourPost={yourPost}
        />
      )}
    </>
  );
}
