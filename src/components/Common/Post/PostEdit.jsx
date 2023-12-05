import React, { useState } from 'react';
import { UserImg } from '../../Common/Userinfo/UserInfoStyle';
import { updatePost } from '../../../api/post';
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
import { uploadImg, uploadImgs } from '../../../api/imageApi';
import myProfile from '../../../assets/image/profile-img4.svg';
import uploadChat from '../../../assets/image/chat-upload-btn.svg';
import CustomAlert from '../CustomAlert/CustomAlert';

export default function PostEdit({
  id,
  title,
  type,
  label,
  value,
  placeholder,
  beforePostData,
  onSubmit,
}) {
  const imageArr = beforePostData.post.image
    ? beforePostData.post.image.split(',')
    : [];
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState(imageArr);
  const [content, setContent] = useState(
    type === 'walk'
      ? beforePostData.post.content.split('petpal_walk_').join('')
      : beforePostData.post.content.split('petpal_care_').join(''),
  );
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleImageChange = async e => {
    const selectedFiles = Array.from(e.target.files);
    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('image', file);
    });
    try {
      const imgUpload = await uploadImgs(formData);
      if (selectedFiles.length > 3) {
        setAlertMessage('이미지는 3장 이하로 업로드 가능합니다.');
        setShowAlert(true);
        return;
      }
      setSelectedImages(
        imgUpload.data.map(
          data => `https://api.mandarin.weniv.co.kr/${data.filename}`,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };
  const appendFlagContent =
    type === 'walk' ? `petpal_walk_${content}` : `petpal_care_${content}`;
  const uploadData = async e => {
    try {
      e.preventDefault();
      const postData = {
        post: {
          image: selectedImages.toString(),
          content: appendFlagContent,
        },
      };
      const response = await updatePost(beforePostData.post.id, postData);
      if (!content) {
        setAlertMessage('게시글 내용을 입력해주세요.');
        setShowAlert(true);
        return;
      }
      if (selectedImages.length === 0) {
        setAlertMessage('이미지를 업로드해주세요.');
        setShowAlert(true);
        return;
      }
      if (response.status === 200) {
        setAlertMessage(
          '게시글 수정이 완료되었습니다. 게시글 목록으로 이동합니다.',
        );
        setShowAlert(true);
        setTimeout(() => {
          if (type === 'walk') {
            navigate('/walkList');
          }
          if (type === 'care') {
            navigate('/careList');
          }
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <PostContainer>
      <HeaderWrap>
        <h1 className="a11y-hidden">게시글 등록 작성</h1>
        <PrevBtn>
          <Link to="/walkList"></Link>
        </PrevBtn>
        <div>
          <HeaderContent>{title}</HeaderContent>
        </div>
        <UploadBtn onClick={uploadData} type="submit">
          수정하기
        </UploadBtn>
      </HeaderWrap>
      <PostDiv>
        <UserImg
          src={myProfile}
          alt="프로필 이미지"
          style={{ width: '60px', height: '60px', border: 'none' }}
        />
        <form onSubmit={onSubmit}>
          <label htmlFor={id} className="a11yHidden">
            {label}
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
          />
          <PostContent
            value={content}
            placeholder={placeholder}
            onChange={e => {
              setContent(e.target.value);
            }}
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
    </PostContainer>
  );
}
