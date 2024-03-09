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
import imgUpload from '../../assets/image/icon-upload-img.svg';
import CustomAlert from '../Common/CustomAlert/CustomAlert';

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

  // const handleUploadClick = () => {
  //   if (!productTitle) {
  //     alert('상품명을 입력해주세요.');
  //   } else if (!productPrice) {
  //     alert('가격을 입력해주세요.');
  //   } else if (!productDescription) {
  //     alert('상품 설명을 입력해주세요.');
  //   } else if (!imageFile) {
  //     alert('이미지를 업로드해주세요.');
  //   } else {
  //     onUploadClick();
  //   }
  // };

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleUploadClick = () => {
    if (!productTitle) {
      setAlertMessage('상품명을 입력해주세요.');
      setShowAlert(true);
    } else if (!productPrice) {
      setAlertMessage('가격을 입력해주세요.');
      setShowAlert(true);
    } else if (!productDescription) {
      setAlertMessage('상품 설명을 입력해주세요.');
      setShowAlert(true);
    } else if (!imageFile) {
      setAlertMessage('이미지를 업로드해주세요.');
      setShowAlert(true);
    } else {
      onUploadClick();
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <StyledLayout>
        <HeaderWrap>
          <h1 className="a11y-hidden">쇼핑하기 상품 등록 작성</h1>
          <div>
            <PrevBtn>
              <Link to="/productList" aria-label="상품 목록으로 이동"></Link>
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
                <img src={imgUpload} alt="이미지 업로드 버튼" />
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
        {/* {showAlert && (
          <StyledAlert>
            <div className="alertContent">
              <p>{alertMessage}</p>
              <Button
                children="확인"
                size="xs"
                variant="primary"
                onClick={closeAlert}
              />
            </div>
          </StyledAlert>
        )} */}
        {showAlert && (
          <CustomAlert message={alertMessage} onClose={closeAlert} />
        )}
      </StyledLayout>
    </>
  );
}
