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

export default function ProductDetail() {
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
            <img src="./images/product00.svg" alt="상품 이미지" />
          </ImgArea>
          <DescArea>
            <ProfileArea>
              <Link to={`/profile`} className="profileInfo">
                <span className="profileImg">
                  <img src="./images/profile-img.svg" alt="프로필 이미지" />
                </span>
                <span className="userInfo">
                  <strong>식빵맘</strong>
                  <span>22분전</span>
                </span>
              </Link>
            </ProfileArea>
            <TextArea>
              <strong className="productTitle">
                강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
              </strong>
              <strong className="productPrice">
                <span>9900</span>원
              </strong>
              <span className="productDesc">
                저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이
                제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은
                안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은 안먹네요
                ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서
                팝니다. 저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
                저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이
                제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은
                안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은 안먹네요
                ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서
                팝니다. 저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
                저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
                강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이
                제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은
                안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은 안먹네요
                ㅠㅠ 그래서 팝니다. 저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서
                팝니다. 끝
              </span>
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
