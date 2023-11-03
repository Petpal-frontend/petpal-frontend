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

  const handleUploadClick = () => {
    if (!productTitle) {
      alert('상품명을 입력해주세요.');
    } else if (!productPrice) {
      alert('가격을 입력해주세요.');
    } else if (!productDescription) {
      alert('상품 설명을 입력해주세요.');
    } else if (!imageFile) {
      alert('이미지를 업로드해주세요.');
    } else {
      onUploadClick();
    }
  };

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
          <UploadBtn onClick={handleUploadClick}>업로드</UploadBtn>
        </HeaderWrap>
        <MainWrap>
          <ImgArea>
            {imageFile ? (
              <img
                src={
                  typeof imageFile === 'string'
                    ? imageFile
                    : URL.createObjectURL(imageFile)
                }
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
                    required
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
                    required
                  />
                </p>
                <p>
                  <label htmlFor="productDescription">상품 설명</label>
                  <textarea
                    placeholder="상품에 대해 설명해주세요."
                    rows="4"
                    value={productDescription}
                    onChange={onDescriptionChange}
                    required
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
