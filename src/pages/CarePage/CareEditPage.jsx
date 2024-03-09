import React, { useEffect, useState } from 'react';
import PostEdit from '../../components/Common/Post/PostEdit';
import { getPostDetail, updatePost } from '../../api/post';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Common/Header/Header';
import { uploadImgs } from '../../api/imageApi';

export default function CareEditPage() {
  const location = useLocation();
  const { post } = location.state;

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostDetail(post.id);
        setIsDataLoaded(true);
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
      }
    };
    fetchData();
  }, [post.id]);

  const imageArr = post.image ? post.image.split(',') : [];
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState(imageArr);
  const [content, setContent] = useState(
    post.content.split('petpal_care_').join(''),
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

  const appendFlagContent = `petpal_care_${content}`;

  const uploadData = async e => {
    try {
      e.preventDefault();
      const postData = {
        post: {
          image: selectedImages.toString(),
          content: appendFlagContent,
        },
      };
      const response = await updatePost(post.id, postData);
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
      <Header type="edit" post="care" title="돌보미" onClick={uploadData} />
      {isDataLoaded && (
        <PostEdit
          id="PostContent"
          handleImageChange={handleImageChange}
          content={content}
          setContent={setContent}
          selectedImages={selectedImages}
          showAlert={showAlert}
          alertMessage={alertMessage}
          closeAlert={closeAlert}
          handleCancelImage={handleCancelImage}
        />
      )}
    </>
  );
}
