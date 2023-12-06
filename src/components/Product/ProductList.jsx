import React, { useState, useEffect } from 'react';
import { StyledLayout, MainWrap, ProductLi } from './ProductListStyle';
import { getProductList } from '../../api/product';
import { getProductDetail } from '../../api/product';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import Loading from '../Common/Loading/Loading';
import WriteButton from '../Common/Button/WriteButton/WriteButton';
export default function ProductList() {
  const [loading, setLoading] = useState(true);

  const userInfo = useRecoilValue(userInfoAtom);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProductList();
        setProducts(data.product);
        setLoading(false);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(
    v =>
      v.author.accountname.includes('petpal_') &&
      v.author.intro === userInfo.intro,
  );

  const handleProductClick = async productId => {
    try {
      const response = await getProductDetail(productId);

      // 페이지 이동
      window.location.href = `/productDetail/${productId}`;
    } catch (error) {
      console.error('상품 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };
  return (
    <StyledLayout>
      <MainWrap>
        {loading ? <Loading /> : null}
        <ul>
          {filteredProducts.map((el, i) => {
            return (
              <ProductLi key={i} onClick={() => handleProductClick(el._id)}>
                <p className="productImg">
                  <img src={el.itemImage} alt="상품 이미지" />
                </p>
                <strong className="productTitle">{el.itemName}</strong>
                <span className="productDesc">{el.link}</span>
                <strong className="productPrice">
                  <span>{el.price.toLocaleString('ko-KR')}</span>원
                </strong>
              </ProductLi>
            );
          })}
        </ul>
      </MainWrap>
      <WriteButton />
    </StyledLayout>
  );
}
