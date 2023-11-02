import React, { useState } from 'react';
import Header from '../Header/Header';
import { UserImg } from '../../Common/Userinfo/UserInfoStyle';

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
import { uploadImg, uploadImgs } from '../../../api/imageApi';

export default function PostEdit({
  id,
  title,
  type,
  label,
  value,
  placeholder,
  onSubmit,
  beforePostData,
}) {
  const myProfile = 'images/profile-img4.svg';
  console.log('sdasd' + beforePostData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [content, setContent] = useState(beforePostData.post.content);
  const navigate = useNavigate();
  const handleImageChange = async e => {
    try {
      console.log('handle img func');
      const selectedFiles = Array.from(e.target.files);
      const createUrlPromises = selectedFiles.map(file =>
        URL.createObjectURL(file),
      );
      const imageUrls = await Promise.all(createUrlPromises);
      setSelectedImages(imageUrls);
      console.log('imaged', selectedImages);
    } catch (err) {
      console.error(err);
    }
  };

  const appendFlagContent =
    type === 'walk' ? `petpal_walk_${content}` : `petpal_care_${content}`;

  const uploadData = async e => {
    try {
      e.preventDefault();
      if (selectedImages) {
        // 1. FormData에 여러 이미지 한번에 넣기
        const imgData = new FormData();

        await selectedImages.forEach((img, index) => {
          imgData.append('image', img);
        });

        const imgUpload = await uploadImgs(imgData);
        await console.log('2222', imgUpload);

        const imgPath = imgUpload.data.filename;
        console.log(imgPath);
      }
      const postData = {
        post: {
          images: selectedImages,
          content: appendFlagContent,
        },
      };

      const response = await uploadPost(postData);
      await console.log('response:::', response.data);
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
          style={{ width: '60px', height: '60px' }}
        />

        <form onSubmit={onSubmit}>
          <label htmlFor={id} className="a11yHidden">
            {label}
          </label>
          <label htmlFor={id}>
            <ImgUploadButton src={'images/chat-upload-btn.svg'} />
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
            value={content.replace(/^petpal_walk_|^petpal_care_/g, '')}
            placeholder={placeholder}
            onChange={e => {
              setContent(e.target.value);
              console.log(content);
            }}
          />

          {selectedImages.map((imageUrl, index) => (
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