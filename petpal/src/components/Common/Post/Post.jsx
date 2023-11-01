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
import { uploadWalkPost } from '../../../api/walk';
import { uploadImg, uploadImgs } from '../../../api/imageApi';

export default function Post({
  title,
  id,
  type,
  label,
  value,
  placeholder,
  onSubmit,
}) {
  const myProfile = 'images/profile-img4.svg';

  const [selectedImages, setSelectedImages] = useState([]);
  const [content, setContent] = useState('');
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

  const uploadPost = async e => {
    try {
      e.preventDefault();
      if (selectedImages) {
        // 1. FormData에 여러 이미지 한번에 넣기
        const imgData = new FormData();

        await selectedImages.forEach((img, index) => {
          imgData.append('image', img);
        });

        // 2. 배열을 만들어 각 인덱스에 FormData 만들고 이미지 하나씩 넣기
        // const imgData = [];

        // await selectedImages.forEach((img, index) => {
        //   imgData[index] = new FormData();
        //   imgData[index].append('image', img);
        // });

        // 3. FormData 내에 unique key값으로 여러 개의 이미지 넣기
        // const imgData = new FormData();

        // await selectedImages.forEach((img, index) => {
        //   imgData.append(`image${index}`, img);
        // });

        // imgData에 저장 확인
        // for (let key of imgData.keys()) {
        //   console.log('!!!!!!!!!key:', key);
        // }
        // for (let value of imgData.values()) {
        //   console.log('!!!!!!!!!value:', value);
        // }

        const imgUpload = await uploadImgs(imgData);
        await console.log('2222', imgUpload);

        const imgPath = imgUpload.data.filename;
        console.log(imgPath);
      }
      // const postData = {
      //   post: {
      //     images: selectedImages,
      //     content,
      //   },
      // };

      // const response = await uploadWalkPost(postData);
      // await console.log('response:::', response.data);
      // if (response.status === 200) {
      //   navigate('/walkList');
      // }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <HeaderWrap>
        <h1 className="a11y-hidden">쇼핑하기 상품 등록 작성</h1>
        <div>
          <PrevBtn>
            <Link to="/walkList"></Link>
          </PrevBtn>
          <HeaderContent>산책메이트</HeaderContent>
        </div>
        <UploadBtn onClick={uploadPost} type="submit">
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
            value={value}
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
