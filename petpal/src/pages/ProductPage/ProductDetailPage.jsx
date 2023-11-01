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
import { deleteProduct } from '../../api/product';
export default function ProductDetailPage({ product }) {
  const { productId } = useParams();
  const [access, setAccess] = useState(null);
  const { openAlert, AlertComponent } = useAlertControl();
  const [userProductData, setUserProductData] = useState(null);
  const userState = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();
  const [itemName, setItemName] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductDetail(productId);
        // console.log('어카운트네임==' + userState.accountname);
        // console.log('데이터확인==' + response.data.product.author.accountname);
        setAccess(response.data.product.author.accountname);
        setUserProductData(response.data);
        console.log('ress=====' + JSON.stringify(response.data.product));
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [productId]);

  // console.log('sdsd==' + userProductData.product.link);
  //계정 주인과 일치하는지
  const isAccessAllowed = access === userState.accountname;
  //productEditPage로 아래의 값을 이동시켜주는 로직입니다
  const handleModal = event => {
    if (event.target.textContent === '수정') {
      navigate('/productEdit', {
        state: {
          product: {
            id: userProductData.product.id,
            itemName: userProductData.product.itemName,
            price: userProductData.product.price,
            link: userProductData.product.link,
            itemImage: userProductData.product.itemImage,
          },
        },
      });
    } else if (event.target.textContent === '삭제') {
      openAlert();
    }
  };
  const deleteProductReq = async () => {
    await deleteProduct(productId);
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
