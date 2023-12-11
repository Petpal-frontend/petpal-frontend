import React from 'react';
import { UserImg } from '../Userinfo/UserInfoStyle';
import {
  PostContent,
  ImgUploadButton,
  SelectedImage,
  PostDiv,
  ImageContainer,
} from './PostStyle';
import myProfile from '../../../assets/image/profile-img4.svg';
import uploadChat from '../../../assets/image/chat-upload-btn.svg';
import CustomAlert from '../CustomAlert/CustomAlert';
import { ComponentLayout } from '../Layout/LayoutStyle';
import ImageButton from '../Button/ImageButton/ImageButton';
import closeIcon from '../../../assets/image/close.svg';

export default function Post({
  id,
  handleImageChange,
  setContent,
  selectedImages,
  showAlert,
  alertMessage,
  closeAlert,
  onSubmit,
  handleCancelImage,
}) {
  return (
    <ComponentLayout className="detailComponent">
      <PostDiv>
        <UserImg
          src={myProfile}
          alt="프로필 이미지"
          style={{ width: '60px', height: '60px', border: 'none' }}
        />
        <form onSubmit={onSubmit}>
          <label htmlFor={id} className="a11yHidden">
            이미지 업로드 버튼
          </label>
          <label htmlFor={id}>
            <ImgUploadButton src={uploadChat} />
          </label>
          <input
            type="file"
            id={id}
            style={{ display: 'none' }}
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
          />
          <PostContent
            placeholder="게시글 입력하기..."
            onChange={e => {
              setContent(e.target.value);
            }}
            required
          />
          {/* {selectedImages &&
            selectedImages.map((imageUrl, index) => (
              <SelectedImage
                key={index}
                src={imageUrl}
                alt={`미리 보기 이미지 ${index + 1}`}
              />
            ))} */}
          <ImageContainer>
            {selectedImages &&
              selectedImages.map((imageUrl, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                  }}
                >
                  <SelectedImage
                    key={index}
                    src={imageUrl}
                    alt={`미리 보기 이미지 ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleCancelImage(index)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: -10,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ImageButton src={closeIcon} alt="취소" />
                  </button>
                </div>
              ))}
          </ImageContainer>
        </form>
      </PostDiv>
      {showAlert && <CustomAlert message={alertMessage} onClose={closeAlert} />}
    </ComponentLayout>
  );
}
