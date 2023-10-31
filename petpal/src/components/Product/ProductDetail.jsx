import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLayout } from './ProductDetailStyle';
import { HeaderWrap } from './ProductDetailStyle';
import { PrevBtn, MoreBtn } from './ProductDetailStyle';
import { MainWrap } from './ProductDetailStyle';
import { ImgArea } from './ProductDetailStyle';
import {
  DescArea,
  ProfileArea,
  TextArea,
  ChatBtnArea,
} from './ProductDetailStyle';

export default function ProductDetail({ ProductDetail }) {
  //시간 계산 로직입니다
  function formatDateTime(dateTimeString) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    const formattedDate = new Date(dateTimeString).toLocaleDateString(
      'ko-KR',
      options,
    );
    return formattedDate;
  }
  const updatedAt = ProductDetail.product.updatedAt;
  return (
    <>
      <StyledLayout>
        <HeaderWrap>
          <h1 className="a11y-hidden">쇼핑하기 상품 상세</h1>
          <PrevBtn>
            <Link to="/productList"></Link>
          </PrevBtn>
          <MoreBtn />
        </HeaderWrap>
        <MainWrap>
          <ImgArea>
            <img src={ProductDetail.product.itemImage} alt="상품 이미지" />
          </ImgArea>
          <DescArea>
            <ProfileArea>
              <Link to={`/profile`} className="profileInfo">
                <span className="profileImg">
                  <img
                    src={ProductDetail.product.author.image}
                    alt="프로필 이미지"
                  />
                </span>
                <span className="userInfo">
                  <strong>{ProductDetail.product.author.username}</strong>
                  <span>{formatDateTime(updatedAt)}</span>
                </span>
              </Link>
            </ProfileArea>
            <TextArea>
              <strong className="productTitle">
                {ProductDetail.product.itemName}
              </strong>
              <strong className="productPrice">
                <span>{ProductDetail.product.price}</span>원
              </strong>
              <span className="productDesc">{ProductDetail.product.link}</span>
            </TextArea>
          </DescArea>
          <ChatBtnArea>
            <Link to={`/chatRoom`} className="chatBtn">
              채팅하기
            </Link>
          </ChatBtnArea>
        </MainWrap>
      </StyledLayout>
    </>
  );
}
