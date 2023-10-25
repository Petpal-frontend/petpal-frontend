import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLayout } from './ProductListStyle';
import { HeaderWrap } from './ProductListStyle';
import { PrevBtn, HeaderContent } from './ProductListStyle';
import { MainWrap } from './ProductListStyle';
import { ProductLi, ProductImg, ProductInfo } from './ProductListStyle';
import { NavBarWrap, NavBarUl } from '../Common/NavBar/NavBar';
import { IconImg, IconInfo } from './ProductListStyle';
import { AddBtn } from './ProductListStyle';

export default function ProductList() {
  return (
    <>
      <StyledLayout>
        <HeaderWrap>
          <h1 className="a11y-hidden">쇼핑하기</h1>
          <PrevBtn />
          <HeaderContent>쇼핑하기</HeaderContent>
        </HeaderWrap>

        <MainWrap>
          <ul>
            {/* <li>
            <a href="#none">
              <img src="./images/product00.svg" alt="상품 이미지" />
              <strong>강아지 사료 팝니다.</strong>
              <span>저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.</span>
              <strong>
                <span>9900</span>원
              </strong>
            </a>
          </li> */}
            {/* <ProductLi>
              <ProductImg src="./images/product00.svg" alt="상품 이미지" />
              <ProductInfo>강아지 사료 팝니다.</ProductInfo>
              <ProductInfo>
                저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
              </ProductInfo>
              <ProductInfo>9,900원</ProductInfo>
            </ProductLi> */}
            <ProductLi>
              <Link to={`/productDetail/`}>
                <p className="productImg">
                  <img src="./images/product00.svg" alt="상품 이미지" />
                </p>
                <strong className="productTitle">
                  강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
                </strong>
                <span className="productDesc">
                  저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                  강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
                  이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
                </span>
                <strong className="productPrice">
                  <span>9900</span>원
                </strong>
              </Link>
            </ProductLi>
            <ProductLi>
              <Link to={`/productDetail/`}>
                <p className="productImg">
                  <img src="./images/product00.svg" alt="상품 이미지" />
                </p>
                <strong className="productTitle">
                  강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
                </strong>
                <span className="productDesc">
                  저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                  강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
                  이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
                </span>
                <strong className="productPrice">
                  <span>9900</span>원
                </strong>
              </Link>
            </ProductLi>
            <ProductLi>
              <Link to={`/productDetail/`}>
                <p className="productImg">
                  <img src="./images/product00.svg" alt="상품 이미지" />
                </p>
                <strong className="productTitle">
                  강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
                </strong>
                <span className="productDesc">
                  저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                  강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
                  이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
                </span>
                <strong className="productPrice">
                  <span>9900</span>원
                </strong>
              </Link>
            </ProductLi>
            <ProductLi>
              <Link to={`/productDetail/`}>
                <p className="productImg">
                  <img src="./images/product00.svg" alt="상품 이미지" />
                </p>
                <strong className="productTitle">
                  강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
                </strong>
                <span className="productDesc">
                  저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                  강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
                  이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
                </span>
                <strong className="productPrice">
                  <span>9900</span>원
                </strong>
              </Link>
            </ProductLi>
            <ProductLi>
              <Link to={`/productDetail/`}>
                <p className="productImg">
                  <img src="./images/product00.svg" alt="상품 이미지" />
                </p>
                <strong className="productTitle">
                  강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
                </strong>
                <span className="productDesc">
                  저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                  강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
                  이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
                </span>
                <strong className="productPrice">
                  <span>9900</span>원
                </strong>
              </Link>
            </ProductLi>
            <ProductLi>
              <Link to={`/productDetail/`}>
                <p className="productImg">
                  <img src="./images/product00.svg" alt="상품 이미지" />
                </p>
                <strong className="productTitle">
                  강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
                </strong>
                <span className="productDesc">
                  저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                  강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
                  이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
                </span>
                <strong className="productPrice">
                  <span>9900</span>원
                </strong>
              </Link>
            </ProductLi>
          </ul>
        </MainWrap>

        <AddBtn>글쓰기</AddBtn>
      </StyledLayout>
    </>
  );
}
