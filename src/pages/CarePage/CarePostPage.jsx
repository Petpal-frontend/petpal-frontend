import React, { useState } from 'react';
import Post from '../../components/Common/Post/Post';
import Header from '../../components/Common/Header/Header';
import { useNavigate } from 'react-router-dom';
import { uploadImgs } from '../../api/imageApi';
import { uploadPost } from '../../api/post';

export default function CarePostPage() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [content, setContent] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  const handleImageChange = async e => {
    const selectedFiles = Array.from(e.target.files);

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('image', file);
    });

    try {
      const imgUpload = await uploadImgs(formData);
      if (selectedFiles.length > 3) {
        setAlertMessage('이미지는 최대 3개까지만 등록 가능합니다.');
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

  const appendFlagContent = `petpal_care_${content}`;

  const uploadData = async e => {
    try {
      e.preventDefault();
      // 필수 입력 필드인 content와 selectedImages 검사
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
      const postData = {
        post: {
          image: selectedImages.toString(),
          content: appendFlagContent,
        },
      };

      const response = await uploadPost(postData);
      if (response.status === 200) {
        setAlertMessage(
          '게시글 등록이 완료되었습니다. 게시글 목록으로 이동합니다.',
        );
        setShowAlert(true);
        setTimeout(() => {
          navigate('/careList');
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleCancelImage = index => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <>
      <Header
        type="posting"
        post="walk"
        title="돌보미 구인"
        onClick={uploadData}
      />
      <Post
        id="PostContent"
        handleImageChange={handleImageChange}
        setContent={setContent}
        selectedImages={selectedImages}
        showAlert={showAlert}
        alertMessage={alertMessage}
        closeAlert={closeAlert}
        handleCancelImage={handleCancelImage}
      />
    </>
  );
}
