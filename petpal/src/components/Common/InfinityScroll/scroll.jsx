import React, { useState, useEffect } from 'react';
import { ImageButton, Container } from '../ImageButtonStyle';

const InfiniteScroll = () => {
  const [imageUrls, setImageUrls] = useState(
    Array.from(
      { length: 10 },
      (_, index) => `https://via.placeholder.com/${index + 1}.jpg`,
    ),
  );

  const addContent = () => {
    const newImageUrl = `https://via.placeholder.com/${
      imageUrls.length + 1
    }.jpg`;
    setImageUrls([...imageUrls, newImageUrl]);
  };

  const checkScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.innerHeight + window.scrollY;
    if (scrollTop >= scrollHeight - 100) {
      // 스크롤이 맨 아래로 도달했을 때 이미지 추가
      addContent();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [imageUrls]);

  return (
    <Container>
      {imageUrls.map((imageUrl, index) => (
        <ImageButton
          key={index}
          to={imageUrl.to}
          backgroundimage={imageUrl.image}
        >
          <img src={imageUrl} alt={`프로필 ${index + 1}`} />
        </ImageButton>
      ))}
    </Container>
  );
};

export default InfiniteScroll;
