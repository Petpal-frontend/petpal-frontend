import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetail from '../../components/Product/ProductDetail';
import Header from '../../components/Common/Header/Header';
import { getProductDetail } from '../../api/product';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [userProductData, setUserProductData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductDetail(productId);
        // console.log('어카운트네임!==' + userState.accountname);
        // console.log('데이터확인!==' + response.data.product.itemImage);
        setUserProductData(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [productId]);
  return (
    <>
      <Header type="post" title="" />
      {userProductData && <ProductDetail ProductDetail={userProductData} />}
    </>
  );
}
