import React, { useState } from 'react';
import Header from '../Header/Header';
import { UserImg } from '../Userinfo/UserInfoStyle';

import {
  PostContainer,
  PostContent,
  ImgUploadButton,
  SelectedImage,
  PostDiv,
} from './PostStyle';
import {
  HeaderContent,
  HeaderWrap,
  PrevBtn,
  UploadBtn,
} from '../../Product/ProductPostStyle';
import { Link, useNavigate } from 'react-router-dom';
import { uploadPost } from '../../../api/post';
import { uploadImgs } from '../../../api/imageApi';
import myProfile from '../../../assets/image/profile-img4.svg';
import uploadChat from '../../../assets/image/chat-upload-btn.svg';
import CustomAlert from '../CustomAlert/CustomAlert';
import { ComponentLayout } from '../Layout/LayoutStyle';

export default function Post({
  id,
  handleImageChange,
  setContent,
  selectedImages,
  showAlert,
  alertMessage,
  closeAlert,
  onSubmit,
}) {
  // const [selectedImages, setSelectedImages] = useState([]);
  // const [content, setContent] = useState('');

  // const [showAlert, setShowAlert] = useState(false);
  // const [alertMessage, setAlertMessage] = useState('');

  // const navigate = useNavigate();

  // const handleImageChange = async e => {
  //   const selectedFiles = Array.from(e.target.files);

  //   const formData = new FormData();
  //   selectedFiles.forEach(file => {
  //     formData.append('image', file);
  //   });

  //   try {
  //     const imgUpload = await uploadImgs(formData);
  //     if (selectedFiles.length > 3) {
  //       setAlertMessage('게시글 내용을 입력해주세요.');
  //       setShowAlert(true);
  //       return;
  //     }
  //     setSelectedImages(
  //       imgUpload.data.map(
  //         data => `https://api.mandarin.weniv.co.kr/${data.filename}`,
  //       ),
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const appendFlagContent =
  //   type === 'walk' ? `petpal_walk_${content}` : `petpal_care_${content}`;

  // const uploadData = async e => {
  //   try {
  //     e.preventDefault();
  //     // 필수 입력 필드인 content와 selectedImages 검사
  //     if (!content) {
  //       setAlertMessage('게시글 내용을 입력해주세요.');
  //       setShowAlert(true);
  //       return;
  //     }

  //     if (selectedImages.length === 0) {
  //       setAlertMessage('이미지를 업로드해주세요.');
  //       setShowAlert(true);
  //       return;
  //     }
  //     const postData = {
  //       post: {
  //         image: selectedImages.toString(),
  //         content: appendFlagContent,
  //       },
  //     };

  //     const response = await uploadPost(postData);
  //     if (response.status === 200) {
  //       setAlertMessage(
  //         '게시글 등록이 완료되었습니다. 게시글 목록으로 이동합니다.',
  //       );
  //       setShowAlert(true);
  //       setTimeout(() => {
  //         if (type === 'walk') {
  //           navigate('/walkList');
  //         }
  //         if (type === 'care') {
  //           navigate('/careList');
  //         }
  //       }, 2000);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const closeAlert = () => {
  //   setShowAlert(false);
  // };

  return (
    <ComponentLayout className="detailComponent">
      {/* <HeaderWrap>
        <h1 className="a11y-hidden">게시글 등록 작성</h1>
        <div>
          <PrevBtn>
            {type === 'walk' ? (
              <Link to="/walkList"></Link>
            ) : (
              <Link to="/careList"></Link>
            )}
          </PrevBtn>
          <HeaderContent>{title}</HeaderContent>
        </div>
        <UploadBtn onClick={uploadData} type="submit">
          업로드
        </UploadBtn>
      </HeaderWrap> */}
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
          {selectedImages &&
            selectedImages.map((imageUrl, index) => (
              <SelectedImage
                key={index}
                src={imageUrl}
                alt={`미리 보기 이미지 ${index + 1}`}
              />
            ))}
        </form>
      </PostDiv>
      {showAlert && <CustomAlert message={alertMessage} onClose={closeAlert} />}
    </ComponentLayout>
  );
}
