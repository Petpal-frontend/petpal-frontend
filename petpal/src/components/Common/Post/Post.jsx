import React, { useState } from 'react';
import Header from '../Header/Header';
import { UserImg } from '../Userinfo/UserInfoStyle';

import {
  PostContainer,
  PostContent,
  ImgUploadButton,
  SelectedImage,
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

export default function Post({
  id,
  title,
  type,
  label,
  value,
  placeholder,
  onSubmit,
}) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleImageChange = async e => {
    const selectedFiles = Array.from(e.target.files);

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('image', file);
    });

    try {
      const imgUpload = await uploadImgs(formData);

      // imgUpload.data.forEach(data => {
      //   setSelectedImages(prevImgFiles => [
      //     ...prevImgFiles,
      //     `https://api.mandarin.weniv.co.kr/${data.filename}`,
      //   ]);
      // });
      if (selectedFiles.length > 3) {
        alert('이미지는 최대 3개까지 선택할 수 있습니다.');
        return;
      }
      setSelectedImages(
        imgUpload.data.map(
          data => `https://api.mandarin.weniv.co.kr/${data.filename}`,
        ),
      );

      // console.log(imgUpload);
    } catch (error) {
      console.error(error);
    }
  };

  const appendFlagContent =
    type === 'walk' ? `petpal_walk_${content}` : `petpal_care_${content}`;

  const uploadData = async e => {
    try {
      e.preventDefault();
      // 필수 입력 필드인 content와 selectedImages 검사
      if (!content) {
        alert('게시글 내용을 입력해주세요.');
        return;
      }

      if (selectedImages.length === 0) {
        alert('이미지를 업로드해주세요.');
        return;
      }
      const postData = {
        post: {
          image: selectedImages.toString(),
          content: appendFlagContent,
        },
      };

      // await console.log(postData);
      const response = await uploadPost(postData);
      // await console.log('response:::', response.data);
      if (response.status === 200) {
        alert('게시글 등록이 완료되었습니다. 게시글 목록으로 이동합니다.');
        if (type === 'walk') {
          navigate('/walkList');
        }
        if (type === 'care') {
          navigate('/careList');
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <HeaderWrap>
        <h1 className="a11y-hidden">게시글 등록 작성</h1>
        <div>
          <PrevBtn>
            <Link to="/walkList"></Link>
          </PrevBtn>
          <HeaderContent>{title}</HeaderContent>
        </div>
        <UploadBtn onClick={uploadData} type="submit">
          업로드
        </UploadBtn>
      </HeaderWrap>
      <PostContainer>
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
            required
          />

          <PostContent
            value={value}
            placeholder={placeholder}
            onChange={e => {
              setContent(e.target.value);
              // console.log(content);
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
      </PostContainer>
    </>
  );
}
