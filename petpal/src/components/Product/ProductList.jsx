import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledLayout, MainWrap, ProductLi, AddBtn } from './ProductListStyle';
import { getProductList } from '../../api/productListApi';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductList();
      setProducts(data.product);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (products.length > 0) {
  //     console.log(products);
  //     console.log(products[0].author.accountname);
  //     // console.log(products[0].author.accountname.includes('petpal_'));
  //   }
  // }, [products]);

  const filteredProducts = products.filter(v =>
    v.author.accountname.includes('petpal_'),
  );

  return (
    <StyledLayout>
      <MainWrap>
        <ul>
          {filteredProducts.map((el, i) => {
            return (
              <ProductLi key={i}>
                <Link to={`/productDetail`}>
                  <p className="productImg">
                    <img src={el.itemImage} alt="상품 이미지" />
                  </p>
                  <strong className="productTitle">{el.itemName}</strong>
                  <span className="productDesc">{el.link}</span>
                  <strong className="productPrice">
                    <span>{el.price}</span>원
                  </strong>
                </Link>
              </ProductLi>
            );
          })}
        </ul>
      </MainWrap>
      <AddBtn>
        <Link to="/productPost" className="">
          글쓰기
        </Link>
      </AddBtn>
    </StyledLayout>
  );
}
