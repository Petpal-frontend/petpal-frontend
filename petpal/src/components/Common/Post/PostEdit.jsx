import React, { useState } from 'react';
import { UserImg } from '../../Common/Userinfo/UserInfoStyle';
// import { updatePost } from '../../../api/post';
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
import { updatePost, uploadPost } from '../../../api/post';
import { uploadImg, uploadImgs } from '../../../api/imageApi';

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
  const myProfile = 'images/profile-img4.svg';

  const imageArr = beforePostData.post.image
    ? beforePostData.post.image.split(',')
    : [];

  const [selectedImages, setSelectedImages] = useState(imageArr);
  const [content, setContent] = useState(
    type === 'walk'
      ? beforePostData.post.content.split('petpal_walk_').join('')
      : beforePostData.post.content.split('petpal_care_').join(''),
  );

  const navigate = useNavigate();

  imageArr ? console.log('hihihihihih', imageArr) : console.log('byebye');
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

      console.log(imgUpload);
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

      // await console.log(postData);
      const response = await updatePost(beforePostData.post.id, postData);
      await console.log('response:::', response.data);

      if (response.status === 200) {
        alert('게시글이 수정되었습니다.');
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
            value={content}
            placeholder={placeholder}
            onChange={e => {
              setContent(e.target.value);
              console.log(content);
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
      </PostContainer>
    </>
  );
}
