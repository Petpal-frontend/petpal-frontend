import React, { useState, useEffect, useRef } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleUpload = async () => {
      try {
        const response = await fetch(
          'https://api.mandarin.weniv.co.kr/Ellipse.png',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const data = await response.blob();
        const imageUrl = URL.createObjectURL(data);
        setSelectedImage(imageUrl);
        console.log('Image upload successful:', data);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

    // Intersection Observer 생성
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 요소가 화면에 나타나면 새로운 이미지를 불러옴
            handleUpload();
          }
        });
      },
      {
        root: null, // 뷰포트를 기준으로 감지
        rootMargin: '0px', // 뷰포트 경계선에 닿으면 감지
        threshold: 0.1, // 요소가 뷰포트의 10% 이상 나타날 때 감지
      },
    );

    // Intersection Observer에 감지 대상 요소 등록
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // 컴포넌트가 언마운트될 때 Intersection Observer 해제
    return () => {
      observer.disconnect();
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div ref={containerRef}>
      {selectedImage && <img src={selectedImage} alt="바주카포화이팅이미지" />}
    </div>
  );
};
export default ImageUploader;
