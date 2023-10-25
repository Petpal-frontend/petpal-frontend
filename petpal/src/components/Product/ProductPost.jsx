import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLayout } from './ProductPostStyle';
import { HeaderWrap } from './ProductPostStyle';
import { PrevBtn, HeaderContent, UploadBtn } from './ProductPostStyle';
import { MainWrap } from './ProductPostStyle';
import { ImgArea, FormArea } from './ProductPostStyle';

export default function ProductPost() {
  return (
    <>
      <StyledLayout>
        <HeaderWrap>
          <h1 className="a11y-hidden">쇼핑하기 상품 등록 작성</h1>
          <div>
            <PrevBtn>
              <Link to="/productList"></Link>
            </PrevBtn>
            <HeaderContent>상품 등록</HeaderContent>
          </div>
          <UploadBtn disabled>업로드</UploadBtn>
        </HeaderWrap>
        <MainWrap>
          <ImgArea>
            {/* <img
              src="./images/product00.svg"
              alt="상품 이미지"
              className="productImg"
            /> */}
            <p>
              <label htmlFor="uploadImgBtn">
                <img
                  src="./images/icon-upload-img.svg"
                  alt="이미지 업로드 버튼"
                />
              </label>
              <input type="file" id="uploadImgBtn" className="a11y-hidden" />
            </p>
          </ImgArea>
          <FormArea>
            <form action="#" method="POST">
              <fieldset>
                <legend className="a11y-hidden">상품 등록 작성</legend>
                <p>
                  <label htmlFor="productTitle">상품명</label>
                  <input
                    type="text"
                    id="productTitle"
                    placeholder="2~15자 이내여야 합니다."
                  />
                </p>
                <p>
                  <label htmlFor="productTitle">가격</label>
                  <input
                    type="number"
                    id="productPrice"
                    placeholder="숫자만 입력 가능합니다."
                  />
                </p>
                <p>
                  <label htmlFor="productTitle">상품 설명</label>
                  {/* <input
                    type="text"
                    id="productDesc"
                    placeholder="2~15자 이내여야 합니다."
                  /> */}
                  <textarea
                    placeholder="상품에 대해 설명해주세요."
                    rows="4"
                  ></textarea>
                </p>
              </fieldset>
            </form>
          </FormArea>
        </MainWrap>
      </StyledLayout>
    </>
  );
}
