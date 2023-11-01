import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetail from '../../components/Product/ProductDetail';
import Header from '../../components/Common/Header/Header';
import { getProductDetail } from '../../api/product';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import useAlertControl from '../../components/Common/Modal/useAlertControl';
import Alert from '../../components/Common/Modal/Alert';
import { useNavigate } from 'react-router-dom';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [access, setAccess] = useState(null);
  const { openAlert, AlertComponent } = useAlertControl();
  const [userProductData, setUserProductData] = useState(null);
  const userState = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductDetail(productId);
        // console.log('어카운트네임==' + userState.accountname);
        // console.log('데이터확인==' + response.data.product.author.accountname);
        setAccess(response.data.product.author.accountname);
        setUserProductData(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [productId]);

  //계정 주인과 일치하는지
  const isAccessAllowed = access === userState.accountname;
  const handleModal = event => {
    if (event.target.textContent === '수정') {
    } else if (event.target.textContent === '삭제') {
      openAlert();
    }
  };

  const handledelete = event => {
    if (event.target.textContent === '삭제') {
      navigate(-1);
    }
  };

  return (
    <>
      {isAccessAllowed ? (
        <Header type="myProductDetail" onClick={handleModal} />
      ) : (
        <Header type="productDetail" onClick={handleModal} />
      )}
      {/* <Header type="productDetail" title="" /> */}
      {userProductData && <ProductDetail ProductDetail={userProductData} />}
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
