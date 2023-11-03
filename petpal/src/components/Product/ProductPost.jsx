import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledLayout,
  HeaderWrap,
  PrevBtn,
  HeaderContent,
  UploadBtn,
  MainWrap,
  ImgArea,
  FormArea,
} from './ProductPostStyle';

export default function ProductPost(props) {
  const {
    productTitle,
    productPrice,
    productDescription,
    imageFile,
    onTitleChange,
    onPriceChange,
    onDescriptionChange,
    onImageChange,
    onUploadClick,
  } = props;

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
          <UploadBtn onClick={onUploadClick}>업로드</UploadBtn>
        </HeaderWrap>
        <MainWrap>
          <ImgArea>
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                // src={imageFile}
                alt="업로드된 이미지 미리보기"
                className="productImg"
              />
            ) : null}
            <p>
              <label htmlFor="uploadImgBtn">
                <img
                  src="./images/icon-upload-img.svg"
                  alt="이미지 업로드 버튼"
                />
              </label>
              <input
                type="file"
                id="uploadImgBtn"
                accept="image/*"
                className="a11y-hidden"
                onChange={onImageChange}
              />
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
                    autoComplete="off"
                    value={productTitle}
                    onChange={onTitleChange}
                  />
                </p>
                <p>
                  <label htmlFor="productPrice">가격</label>
                  <input
                    type="number"
                    id="productPrice"
                    placeholder="숫자만 입력 가능합니다."
                    value={productPrice}
                    onChange={onPriceChange}
                  />
                </p>
                <p>
                  <label htmlFor="productDescription">상품 설명</label>
                  <textarea
                    placeholder="상품에 대해 설명해주세요."
                    rows="4"
                    value={productDescription}
                    onChange={onDescriptionChange}
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
